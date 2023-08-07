import { useContext } from "react";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";
import { Button, ThemeProvider } from "@mui/material";
import { Brightness4 } from "@mui/icons-material";


const Navbar = () => {
  let userRol = "user";

  const {theme, changeMode} = useContext(ThemeContext)
  
  return (
    // <div className={"containerNavbar"}>
    //   <Link to="/">Ecommerce</Link>

    //   <ul className="categories">
    //     <Link to="/">Todas</Link>
    //     <Link to="/category/deportivas">Deportivas</Link>
    //     <Link to="/category/urbanas">Urbanas</Link>
    //   </ul>

    //   {userRol === "admin" && <Link to="/dashboard">ADMIN</Link>}

    //   <CartWidget />
    // </div>
    <ThemeProvider theme={theme}>
      
    <nav style={{ padding: theme.spacing(4), height: theme.spacing(18), backgroundColor: theme.palette.secondary.main }}>

        <Link to='/'>
          <h1 style={{ color: theme.palette.primary.main }}>Ecommerce</h1>
        </Link>

        <ul style={{ gap: theme.spacing(1.6) }}>
          <Link to='/' style={{ color: theme.palette.primary.main }}>Todos</Link>
          <Link to='/category/urbanas' style={{ color: theme.palette.primary.main }}>Urbanas</Link>
          <Link to='/category/deportivas' style={{ color: theme.palette.primary.main }}>Deportivas</Link>
        </ul>

        <div>
          <Button sx={{ backgroundColor: 'primary', margin: theme.spacing(3)}} onClick={changeMode}><Brightness4/></Button>
          
          <Link to='/cart' style={{color: 'white'}}>
            <CartWidget theme={theme} />
          </Link>
        </div>
      </nav>  
    </ThemeProvider>
  );
};

export default Navbar;
