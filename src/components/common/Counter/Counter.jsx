import { Box, Button } from "@mui/material";

const Counter = ({ counter, setCounter, agregarAlCarrito, stock }) => {
  {/* <div style={{ display: "flex" }}>
    <Button
      disabled={counter <= 1}
      variant="contained"
      onClick={() => setCounter(counter - 1)}
    >
      -
    </Button>
    <h2>{counter}</h2>
    <Button
      disabled={counter >= stock}
      variant="contained"
      onClick={() => setCounter(counter + 1)}
    >
      +
    </Button>
  </div>
  <br />
  <Button
    variant="contained"
    color="secondary"
    onClick={() => agregarAlCarrito(counter)}
  >
    Agregar al carrito
  </Button> */}
  return (
    

      <Box color='accent.main' sx={{ width: '100%',display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '0.5em', flexWrap: 'nowrap', color: 'primary.main' }}>
            <Box sx={{height: '2em', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <Button
                    disabled={counter <= 1}
                    onClick={() => setCounter(counter - 1)}
                    // color='secondary'
                    sx={{ backgroundColor: 'accent.main' }}
                > - </Button>

                <Box sx={{ margin: 'auto 2em', color: 'primary.main'}}>
                    {stock === 0 ? stock : counter}
                </Box>

                <Button
                    disabled={counter >= stock}
                    onClick={() => setCounter(counter + 1)}
                    sx={{ backgroundColor: 'accent.main' }}
                > + </Button>
            </Box>
            <Button 
                disabled={stock === 0}
                sx={{ width: '100%', backgroundColor: 'accent.main' }}
              onClick={() => agregarAlCarrito(counter)}
            >
                {/* Agregar al Carrito */}
                Add to my cart
            </Button>
        </Box>
    
  );
};

export default Counter;
