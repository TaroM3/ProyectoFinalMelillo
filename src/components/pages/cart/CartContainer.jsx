import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";
import { Image } from "@mui/icons-material";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =  useContext(CartContext);

  const { theme } = useContext(ThemeContext)

  let limpiar = () => {
    Swal.fire({
      html: `<div> Hola </div>`,
      title: "seguro quieres eliminar todo ?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "si, limpiar",
      denyButtonText: `No, no limpiar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito eliminado con exito", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito queda como estaba", "", "info");
      }
    });
  };

  let total = getTotalPrice();
  return (
    <section style={{width: '100%',display: 'flex', justifyContent: 'center', gap: '3em', flexWrap: 'nowrap', flexDirection: 'column'}}>
      {/* <h1>Estoy en el carrito</h1> */}

      {cart.map((product) => {
        return (
          // <div
          //   key={elemento.id}
          //   style={{ width: "200px", border: "2px solid steelblue" }}
          // >
          //   <h3>{elemento.title}</h3>
          //   <h3>{elemento.price}</h3>
          //   <h4>Cantidad: {elemento.quantity}</h4>
          //   <Button variant="contained" onClick={() => deleteById(elemento.id)}>
          //     Eliminar
          //   </Button>
          // </div>
        <section key={product.id} style={{width: '100%',display: 'flex', justifyContent: 'center', gap: '3em', minHeight:'1vh'}}>

          <Card sx={{ width: '45em', backgroundColor: 'secondary.main', margin: '3em', display: 'flex', flexDirection: 'row'}}>

              {/* <Image  sx={{ height: '10em', backgroundColor: 'white' }} image={product.pictureUrl} title={product.title} /> */}
              <Box sx={{backgroundColor: 'white', height: '10em', width: '13em'}}>
                <img src={product.pictureUrl} alt={product.title} style={{height: '10em', width:'13em',backgroundColor: 'white'}}/>
              </Box>
              <Box sx={{ padding: '1em', height: '10em', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignContent: 'center', flexFlow: 'wrap'}}>
                  <CardContent sx={{width: '80%'}}>
                      <Typography gutterBottom variant="h5" component="div" color={'primary'}>
                          {product.title}
                      </Typography>
                      <Typography variant="body2" color="primary">
                          {product.description}
                      </Typography>
                      <Typography variant='h5' color='primary'>
                          ${product.quantity*product.price}
                      </Typography>
                      <Typography variant='h6' color='primary'>
                          Quantity: {product.quantity}
                      </Typography>
                  </CardContent>
                  <CardActions sx={{width: '20%'}}>
                      <Button sx={{backgroundColor: 'accent.main', color: 'white', ":hover": {backgroundColor: 'primary.main', color: 'secondary.main'}}} onClick={() => deleteById(product.id)}>Eliminar</Button>
                  </CardActions>
              </Box>
          </Card>
      </section>
        );
      })}

      {cart.length > 0 && (
        <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-around'}}>
          <Button sx={{backgroundColor: 'accent.main', color: 'white'}} onClick={limpiar}>
            Limpiar carrito
          </Button>
          <Link to="/checkout">
            <Button sx={{backgroundColor: 'accent.main', color: 'white'}} >Terminar compra</Button>
          </Link>
        </Box>
      )}

      <h2>El total del carrito es : {total} </h2>
    </section>
  );
};

export default CartContainer;
