import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { ThemeProvider } from "@emotion/react";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Box } from "@mui/material";

const Layout = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Box sx={{minHeight: '53em'}}>
          <Outlet />
        </Box>
        <Footer />  
      </ThemeProvider>
    </>
  );
};

export default Layout;

