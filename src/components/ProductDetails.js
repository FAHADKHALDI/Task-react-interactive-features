import React from "react";

function ProductDetails(props) {
  return (
    <div className="detail">
      <h5>{props.cookie.name} </h5>
      <img src={props.cookie.image} alt="cookie" />
      <p>{props.cookie.price} KD </p>
      <p>{props.cookie.details}</p>
    </div>
  );
}

export default ProductDetails;
