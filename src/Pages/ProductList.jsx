import React from "react";
import { Product } from "../Components/Product";

export const ProductList = () => {
  const products = [
    {
      title: "Shoes & Shirt",
      price: 999,
      originalPrice: 1299,
      imageUrl: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Watch",
      price: 1999,
      originalPrice: 2499,
      imageUrl: "https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Backpack",
      price: 799,
      originalPrice: 1099,
      imageUrl: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    // Add more products as needed
  ];

  return (
    <div className="container">
      <div className="row">
        {products.map((product, index) => (
          <Product
            key={index}
            title={product.title}
            price={product.price}
            originalPrice={product.originalPrice}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};
