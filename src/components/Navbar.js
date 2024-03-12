import React from 'react';
import { CiShoppingCart } from "react-icons/ci";

const Navbar = ({ quantity }) => {
  return (
    <div className='nav' style={{height: '50px'}}>
      <ul className='nav-list'>
        <li>Add to Cart</li>
        <li>
          <CiShoppingCart className='cart-icon' />
          <span>{quantity}</span>
        </li>
      </ul>
    </div>
  )
}

export default Navbar