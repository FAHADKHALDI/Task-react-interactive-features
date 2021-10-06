import { useState } from "react";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
// Data
import products from "../products";

const ProductList = (props) => {
  const [query, setQuery] = useState("");

  const productList = products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => (
      <ProductItem
        product={product}
        setCookie={props.setCookie}
        key={product.id}
      />
    ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <div className="listWrapper">{productList}</div>
    </>
  );
};

export default ProductList;
