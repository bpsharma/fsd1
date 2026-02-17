// replace the following code in main.jsx file of your React Project

import { createRoot } from 'react-dom/client'

const ProductCard = ({ name, price, status }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>{status}</p>
    </div>
  );
};

createRoot(document.getElementById('root')).render(
    <div>
        <h2>Product List</h2>
        <div>
          <ProductCard name="Wireless Mouse" price="25.99" status="In Stock"  />
          <ProductCard name="Keyboard" price="45.5" status="Out of Stock"  />
          <ProductCard name="Monitor" price="199.99" status="In Stock"  />        </div>
        </div>
)
