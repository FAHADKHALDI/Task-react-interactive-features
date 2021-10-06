const ProductItem = (props) => {
  const product = props.product;

  return (
    <div className="productWrapper" onClick={() => props.setCookie(product)}>
      <img alt={product.name} src={product.image} />
      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>
    </div>
  );
};

export default ProductItem;
