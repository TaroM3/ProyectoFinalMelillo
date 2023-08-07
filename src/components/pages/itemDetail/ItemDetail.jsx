import { Box, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import CounterContainer from "../../common/Counter/CounterContainer"


const ItemDetail = ( { product, agregarAlCarrito, cantidadEnCarrito } ) => {
  return (
    // <div>
    //   <h1>{product.title}</h1>
    //   <h3>{product.price}</h3>

    //   <CounterContainer cantidadEnCarrito={cantidadEnCarrito} stock={product.stock} agregarAlCarrito={agregarAlCarrito } />
    // </div>
    <section style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
    <Box sx={{ margin: '5em',backgroundColor: 'secondary.main', display: 'flex', flexDirection:'column',justifyContent:'center'}}>

        <CardMedia sx={{ width: '100%', backgroundColor: 'white' }} image={product.pictureUrl} title={product.title} component='img'/>
        <Box sx={{ width: '25em', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <Typography gutterBottom variant="h5" component="div" color={'primary'}>
                    {product.title}
                </Typography>
                <Typography variant="body2" color="primary">
                    {product.description}
                </Typography>
                <Typography variant="h6" color='primary'>
                    ${product.price}
                </Typography>
            </CardContent>
            <CardActions sx={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
                <CounterContainer cantidadEnCarrito={cantidadEnCarrito} stock={product.stock} agregarAlCarrito={agregarAlCarrito }/>
            </CardActions>
        </Box>
    </Box>
</section>
  )
}

export default ItemDetail