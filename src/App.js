import './App.css';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import { useState } from 'react';

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      image : 'https://ohlocal-media.s3.amazonaws.com/media/SM123057SA_Y8IKpaN.jpg',
      name: "Samsung S21",
      quantity: 0,
      price: 20000,
    },
    {
      id: 2,
      image : 'https://rukminim2.flixcart.com/image/850/1000/mobile/n/h/6/blackberry-bold-9700-original-imad296mmzwsz8jr.jpeg?q=20&crop=false',
      name: "BlackBerry",
      quantity: 0,
      price: 30000,
    },
    {
      id: 3,
      image: 'https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-iPhone-14-Plus-2up-purple-220907-geo_inline.jpg.large.jpg',
      name: "Iphone 14",
      quantity: 0,
      price: 50000,
    },
  ]);

  const [quantity, setQuantity] = useState(0);
  return (
    <div className="App">
      <Navbar quantity={quantity} />
      <br />
      <br />
      <br />
      <Cart
        image={products.image}
        products={products}
        setProducts={setProducts}
        setQuantity={setQuantity}
        quantity={quantity}
      />
    </div>
  );
}

export default App;
