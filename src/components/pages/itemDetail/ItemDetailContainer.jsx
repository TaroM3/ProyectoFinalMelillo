import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../../../firebaseConfig";
import {getDoc, collection, doc} from "firebase/firestore"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  let { id } = useParams();

  const { addToCart, getQuantityById } = useContext(CartContext);

  let cantidadEnCarrito = getQuantityById(id);

  useEffect(() => {
    let refCollection = collection( db , "products" )
    let refDoc = doc( refCollection, id )
    getDoc(refDoc).then( res => setProduct({...res.data(), id: res.id}))

  }, [id]);

  const agregarAlCarrito = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };

    addToCart(data);
 
    toast.success("Producto agregado", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      {product.title !== undefined ?
      <ItemDetail
        product={product}
        agregarAlCarrito={agregarAlCarrito}
        cantidadEnCarrito={cantidadEnCarrito}
      /> : <h1 style={{color: 'white'}}>CARGANDO</h1>
       }
      <ToastContainer />
    </>
  );
};

export default ItemDetailContainer;

// Number("12") ---> 12
// parseInt("12") --->12
// +"12" --->12
