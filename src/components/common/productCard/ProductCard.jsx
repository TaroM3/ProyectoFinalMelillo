import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Card sx={{ width: '345px', backgroundColor: 'secondary.main' }}>
            <CardMedia sx={{ height: '15em', backgroundColor: 'white' }} image={item.pictureUrl} title={item.title} component='img'/>
            <Box sx={{ height: '10em', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color={'primary'}>
                        {item.title}
                    </Typography>
                    <Typography variant="body2" color="primary">
                        {item.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/itemDetail/${item.id}`}>
                        <Button size="small" variant="contained" sx={{ backgroundColor: 'accent.main', color: 'white' }}>
                            Ver detalle
                        </Button>
                    </Link>
                </CardActions>
            </Box>
        </Card>

  );
};

export default ProductCard;
