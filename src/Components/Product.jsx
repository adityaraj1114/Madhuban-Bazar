import React, { useState } from "react";

export const Product = ({ title, price, originalPrice, imageUrl }) => {
  const [quantity, setQuantity] = useState(1);

  const handleOrderNow = () => {
    const message = `Order Details:%0AProduct Name: ${title}%0APrice: Rs ${price}%0ADiscounted Price: Rs ${originalPrice}%0AQuantity: ${quantity}%0ATotal: Rs ${
      price * quantity
    }`;
    const whatsappUrl = `https://wa.me/918448034260?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="col-12 col-md-3 mb-4">
      <div className="card">
        <img src={imageUrl} className="card-img-top" alt={title} />
        <div className="card-body">
          <h4 className="card-title mt-2">{title}</h4>
          <div className="quantity d-flex justify-content-between">
            <p className="card-text fs-5 w-100">Rs {price}</p>
            <select
              className="form-select ms-5"
              id="select"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          <p className="card-text fs-6">
            <del>Rs {originalPrice}</del>
          </p>

          <button onClick={handleOrderNow} className="btn btn-primary">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};
