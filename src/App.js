import './App.css';
import Navbar from './components/Navbar';
import React,{useState} from 'react';
// import Product from './components/Product';
import ProductList from './components/ProductList.jsx';
import Footer from './components/Footer'


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
  let [ totalAmount, setTotalAmount] = useState(0)

  const incrementQuantity = (index)=>{
    let newProductList = [...productList]
    newProductList[index].quantity++
    setProductList(newProductList)
  }

  const decrementQuantity = (index)=>{
    let newProductList = [...productList]
    newProductList[index].quantity > 0 ? newProductList[index].quantity--: newProductList[index].quantity = 0
    setProductList(newProductList)
  }

  
  return (
    <>
    <Navbar />
    <main className="container mt-5"> 
      <ProductList productList={productList}  incrementQuantity = {this.incrementQuantity}  decrementQuantity = {this.decrementQuantity}/>
    </main>
    <Footer />
    </>
  );
}

export default App;
