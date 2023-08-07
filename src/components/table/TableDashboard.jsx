import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { db } from '../../firebaseConfig'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';
import { useState } from 'react';
import { Box, Button } from '@mui/material';

const TableDashboard = () => {

    const [products, setProducts] = useState([])

    const deleteById = (id) => {
        let productsCollection = collection(db, 'products')
        let docRef = doc(productsCollection, id)
        deleteDoc(docRef)
    }
    useEffect(() => {
        let productsCollection = collection(db, 'products')
        getDocs(productsCollection).then((res) => {
            let arrayProducts = res.docs.map((product) => {
                return {...product.data(), id: product.id}
            })
            setProducts(arrayProducts)
        })
    }, [])

    

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));





    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Title</StyledTableCell>
                        <StyledTableCell align="right">Category</StyledTableCell>
                        <StyledTableCell align="center">Description</StyledTableCell>
                        <StyledTableCell align="right">Price</StyledTableCell>
                        <StyledTableCell align="right">Stock</StyledTableCell>
                        <StyledTableCell align="center">PictureUrl</StyledTableCell>
                        <StyledTableCell align="center">Modificar</StyledTableCell>
                        <StyledTableCell align="center">Eliminar</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product) => (
                        <StyledTableRow key={product.id}>
                            <StyledTableCell component="th" scope="row">
                                {product.title}
                            </StyledTableCell>
                            <StyledTableCell align="right">{product.category}</StyledTableCell>
                            <StyledTableCell align="right">{product.description}</StyledTableCell>
                            <StyledTableCell align="right">{product.price}</StyledTableCell>
                            <StyledTableCell align="left">{product.stock}</StyledTableCell>
                            <StyledTableCell align="left">{product.pictureUrl}</StyledTableCell>
                            <StyledTableCell align="center"><Button sx={{backgroundColor: '#F9E46E', ":hover": { bgcolor: "#F9E46E", color: "white"}}} onClick={() => updateById(product.id)}>Modificar</Button></StyledTableCell>
                            <StyledTableCell align="center"><Button sx={{backgroundColor: 'detail.main', ":hover": { bgcolor: "black", color: "white"}}} onClick={() => deleteById(product.id)}>Eliminar</Button></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    )
}

export default TableDashboard

