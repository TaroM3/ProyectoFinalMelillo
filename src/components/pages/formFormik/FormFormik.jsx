import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import * as Yup from "yup";
import { CartContext } from "../../../context/CartContext";
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { ThemeContext } from "../../../context/ThemeContext";
import Bill from "../../common/bill/Bill";

const FormFormik = () => {
  const [showPassword, setShowPassword] = useState(true);
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [order, setOrder] = useState({});

  let total = getTotalPrice();

  // const {cart } = useContext(ThemeContext)
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    onSubmit: (data) => {
     
      let order = {
        buyer: data,
        items: cart,
        total,
        date: serverTimestamp(),
      };
      let ordersCollections = collection(db, "orders");
      addDoc(ordersCollections, order).then((res) => {
        setOrder({...res.data, id: res.id})
      }).then(res => {
        clearCart()
      });

      // MODIFICAR TODOS LOS PRODUCTOS EN SU STOCK
      cart.forEach((elemento) => {
        updateDoc(doc(db, "products", elemento.id), {
          stock: elemento.stock - elemento.quantity,
        });
      });
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Este campo es obligatorio")
        .min(5, "Debe tener al menos 5 caracteres")
        .max(15),
      email: Yup.string()
        .email("No corresponde a un email valido")
        .required("Este campo es obligatorio"),
      phone: Yup.string().required("Este campo es obligatorio"),
    }),
    validateOnChange: false,
  });

  //'#9b9b9b'
  return (
    <Box sx={{ height:'30em',width: '40em',margin: '4em auto', padding: '3em', backgroundColor: 'detail.main'}}>
      {
        order.id == undefined ? <form style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '2em'}} onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          variant="outlined"
          name="name"
          onChange={handleChange}
          error={errors.name ? true : false}
          helperText={errors.name}
        />

        <TextField
          type="text"
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
        />
        <TextField
          style={{}}
          type={showPassword ? "text" : "password"}
          label="Phone"
          variant="outlined"
          name="phone"
          onChange={handleChange}
          error={errors.password ? true : false}
          helperText={errors.password}
        />

        {/* <Button sx={{backgroundColor: 'secondary.main', color: 'primary.main', ":hover": {backgroundColor: 'primary.main', color: 'secondary.main'}}} variant="contained" onClick={() => setShowPassword(!showPassword)}>
          Mostrar/ocultar
        </Button> */}
        <Button  sx={{backgroundColor: 'secondary.main', color: 'primary.main', ":hover": {backgroundColor: 'primary.main', color: 'secondary.main'}}} type="submit" variant="contained">
          Comprar
        </Button>

      </form> : <h1>El numero de orden es {order.id}</h1>
      
      }
      
    </Box>
  );
};

export default FormFormik;

  