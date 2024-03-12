import React, { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const Cart = ({ products, setProducts, setQuantity, quantity }) => {
  const [total, setTotal] = useState(0);

  // increase quantity
  function Increase(id) {
    // let tempProduct = products; // we are storing reference of products in tempProduct
    products.map((product) => {
      // check if product id is equal to the id
      if (product.id === id) {
        // then increase the quantity by 1
        product.quantity += 1;
        setTotal(total + product.price);
        setQuantity(quantity + 1);
      }
      return product;
    });
    // let temp = [...tempProduct];
    setProducts(products);
  }

  // decrease quantity
  function Decrease(id) {
    let tempProducts = [...products]; // here we are using taking value from products array and storing in temoProducts using spred operation

    tempProducts.map((product) => {
      // check if product id is equal to the id
      if (product.id === id && product.quantity >= 1) {
        // then decrease the quantity by 1
        product.quantity -= 1;
        setTotal(total - product.price);
        setQuantity(quantity - 1);
      }
      return product;
    });

    // store the tempProducts
    setProducts(tempProducts);
  }

  function removeProduct(id) {
    let tempProducts = [...products]; // here we are using taking value from products array and storing in temoProducts using spred operation
    let arr = tempProducts.filter((product) => {
      if (product.id === id) {
        setTotal(total - product.quantity * product.price);
        setQuantity(quantity - product.quantity);
      }
      return product.id !== id;
    });
    setProducts(arr);
  }

  return (
    <div>
      <h1>Your product cart</h1>
      {products.length <= 0 && <p>is currently empty</p>}
      {products.map((product) => {
        return (
          <div className="productCard" key={product.id}>
            <img src={product.image}></img>
            <h4>{product.name}</h4>
            <p>Price: {product.price}</p>
            <button style={{border:'none', backgroundColor:'white', color:'blue', cursor:'pointer'}}
              onClick={() => {
                removeProduct(product.id);
              }}
            >
              remove
            </button>
            <div style={{display:'flex', flexDirection:'column', gap:'5px', justifyContent:'center', alignItems:'center'}}>
              <button style={{border:'none', background:'transparent', color:'purple'}}
                onClick={() => {
                  Increase(product.id);
                }}
              >
              <FaChevronUp />
              </button>
              <p style={{padding:'0', margin:'0'}}>{product.quantity}</p>
              <button style={{border:'none', background:'transparent', color:'purple'}}
                onClick={() => {
                  Decrease(product.id);
                }}
              >
              <FaChevronDown />
              </button>
            </div>
          </div>
        );
      })}
      <div>
        <div>
          <p>Total : {total}</p>
        </div>
        <button style={{cursor:'pointer', height:'40px', border:'none', borderRadius:'5px', backgroundColor:'blue', color:'white'}}
          onClick={() => {
            setProducts([]);
            setTotal(0);
            setQuantity(0);
          }}
        >
          Clear cart
        </button>
      </div>
    </div>
  );
};

export default Cart;