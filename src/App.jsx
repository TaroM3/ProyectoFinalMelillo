import { BrowserRouter } from "react-router-dom";

import AppRouter from "./router/AppRouter";
import CartContextComponent from "./context/CartContext";
import ThemeContextComponent from "./context/ThemeContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextComponent>
        <ThemeContextComponent>
          <AppRouter />
        </ThemeContextComponent>
      </CartContextComponent>
    </BrowserRouter>
  );
}

export default App;
