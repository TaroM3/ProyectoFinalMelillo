import { Skeleton, Stack } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <section
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        padding: "5em",
        gap: "0.4em",
      }}
    >
      {items.length > 0
        ? items.map((item) => <ProductCard key={item.id} item={item} />)
        : arr.map((elemento) => (
            <Stack spacing={1} key={elemento} sx={{margin: '2em', color: 'white',}}>
              <Skeleton variant="rounded" width={'20em'} height={'15em'} sx={{ backgroundColor: 'white'}} />
              <Skeleton variant="text" sx={{ backgroundColor: 'white'}}/>
              <Skeleton variant="rounded" width={'20em'} height={'1em'} sx={{ backgroundColor: 'white', fontSize: "1rem"}}/>
              <Skeleton variant="rounded" width={'20em'} height={'1em'} sx={{ backgroundColor: 'white'}}/>
            </Stack>
          ))}
    </section>
  );
};

export default ItemList;

