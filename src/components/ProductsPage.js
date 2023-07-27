// src/components/ProductsPage.js

import { useState } from 'react';
import jsonData from './../data.json';
import Search from './Search';
import ProductTable from './ProductTable';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  
  function handleChange (event) {
       const searchText = event.target.value
       const filteredProducts = jsonData.filter(product => product.name.toLowerCase().includes(searchText))
       setProducts(filteredProducts)
  }
  
  function handleCheckboxChange (event) {
    const isSelected = event.target.checked
    if(isSelected) {
      const filteredProducts = jsonData.filter(product => product.inStock)
      setProducts(filteredProducts)
    } else {
      setProducts(jsonData)
    }
}



  return(
      <div>
        <h1>IronStore</h1>
      <Search handleChange={handleChange}/>
      <div>
      <label>
      <input type="checkbox" onChange={handleCheckboxChange}/>
      only show products in stock
      </label>
    </div>


      <ProductTable  products={products}/> 
      </div>    
  )
}
export default ProductsPage