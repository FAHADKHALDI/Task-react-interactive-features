import { useState } from "react";
import Home from "./components/Home";
// Components
import ProductList from "./components/ProductList";
//styling
import "./App.css";
import ProductDetails from "./components/ProductDetails";

function App() {
  const [cookie, setCookie] = useState({
    id: 1,
    name: "Chocolate Chip Cookie",
    price: 10,
    details:
      "We named this recipe Chocolate Chip Cookie because its got everything a cookie connoisseur could possibly ask for",
    image:
      "https://joyfoodsunshine.com/wp-content/uploads/2016/01/best-chocolate-chip-cookies-recipe-ever-no-chilling-1.jpg",
  });
  const [theme, setTheme] = useState("lighttheme");
  return (
    <div className={theme}>
      <Home setTheme={setTheme} theme={theme} />
      <ProductList setCookie={setCookie} />
      <ProductDetails cookie={cookie} />
    </div>
  );
}

export default App;
