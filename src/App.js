import './App.css';
import Navbar from './components/Navbar';
import ProductsList from './components/ProductList.jsx'
import React,{useState} from 'react';
import Product from './components/Product';
import ProductList from './components/ProductList.jsx';

function App() {
  const ProductList = [
    {
      price: 99999,
      name: 'iphone ultra pro max',
      quantity: 10,
    },
    {
      price: 9999,
      name: 'redmenote 10 ultra pro max',
      quantity: 20,
    },
    {
      price: 8799,
      name: 'Mi ultra pro max',
      quantity: 50,
    },
    {
      price: 99999,
      name: 'realme 11 ultra pro max',
      quantity: 90,
    },
  ]

  let [productList, setProductList] = useState(ProductList)
  
  return (
    <>
    <Navbar />
    <main className="container mt-5"> 
      <ProductsList productList={productList} />
    </main>
    {/* <Footer /> */}
    </>
  );
}

export default App;
