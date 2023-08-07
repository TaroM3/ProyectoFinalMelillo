import { Box, Button, ThemeProvider } from "@mui/material"
import { products } from "../../../productsMock"
import { db } from "../../../firebaseConfig"
import { addDoc, collection } from "@firebase/firestore"
import TableDashboard from '../../table/TableDashboard';
import Navbar from '../../layout/navbar/Navbar';
import Footer from '../../layout/footer/Footer';
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const Dashboard = () => {

  const rellenar = () => {
    let refCollection = collection(db, "products")
    products.forEach((prod) => {
      addDoc(refCollection, prod)
    })
  }

  const { theme } = useContext(ThemeContext)
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Box sx={{minHeight: '50em', padding: '2em', margin: '2em'}}>
          <TableDashboard />
          <h1>Ruta para el administrador</h1>
          <Button variant="contained" onClick={rellenar}>Rellenar base de datos</Button>
        </Box>
        <Footer />

      </ThemeProvider>
    </div>
  )
}

export default Dashboard