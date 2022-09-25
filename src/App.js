import './App.css';
import Navbar from './components/Navbar';
import React,{useState} from 'react';
// import Product from './components/Product';
import ProductList from './components/ProductList'
import Footer from './components/Footer'


function App() {
  const products = [
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

  let [ productList, setProductList ] = useState(products)
  let [ totalAmount, setTotalAmount ] = useState(0)

  const incrementQuantity = (index)=>{
    let newProductList = [...productList]
    let newTotalAmount = [...totalAmount]
    newProductList[index].quantity++
    newTotalAmount += newProductList[index].price
    setTotalAmount(newTotalAmount)
    setProductList(newProductList)
  }

  const decrementQuantity = (index)=>{
    let newProductList = [...productList]
    let newTotalAmount = [...totalAmount]
    newProductList[index].quantity > 0 ? newProductList[index].quantity--: newProductList[index].quantity = 0
    setProductList(newProductList)
  }

  
  return (
    <>
    <Navbar />
    <main className="container mt-5"> 
    <ProductList productList={productList} incrementQuantity = {incrementQuantity}  decrementQuantity = {decrementQuantity} />
    </main>
    <Footer totalAmount ={totalAmount} />
    </>
  );
}

export default App;
