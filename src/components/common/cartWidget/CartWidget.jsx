import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { ShoppingCart } from "@mui/icons-material";



const CartWidget = () => {

  const { getTotalQuantity } = useContext( CartContext )

  let total = getTotalQuantity()

  return (
    
      // <Link to="/cart" style={{color: "black"}}>
      //   <Badge badgeContent={ total } color="primary" showZero>
      //     <ShoppingCartIcon color="main" sx={{ fontSize: 40 }} />
      //   </Badge>
      // </Link>
    
      <Badge badgeContent={total} color= 'accent'>
          <ShoppingCart color='primary' sx={{fontSize: '2.5rem'}}/>
      </Badge>
  );
};

export default CartWidget;