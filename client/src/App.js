import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
const [products, setProducts] = useState([]);

useEffect(()=>{
  (async () => {
    try {
      const response = await fetch('/api/v1/products');
      if (!response.ok){
        throw response
    } 
    const data = await response.json();
    setProducts(data);
  } catch(err) {
      console.log(err.message || err.statusText)
    }
  })()
  
}, setProducts);

  return (
    <div className="App">
      <h1>Products</h1>
      <ul>
        {products.map(({title, price}) => {
          <li>{title} (£{price.toFixed(2)})</li>
        })}
      </ul>
    </div>
  );
}

export default App;
