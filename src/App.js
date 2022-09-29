import './App.css';
import Navbar from './components/Navbar';
import React,{useState, useEffect} from 'react';
// import Product from './components/Product';
import ProductList from './components/ProductList'
import Footer from './components/Footer'
import Additem from './components/Additem';


function App() {
  const products = [
    {
      price: 99999,
      name: 'iphone ultra pro max',
      quantity: 0,
    },
    {
      price: 9999,
      name: 'redmenote 10 ultra pro max',
      quantity: 0,
    },
    {
      price: 8799,
      name: 'Mi ultra pro max',
      quantity: 0,
    },
    {
      price: 99999,
      name: 'realme 11 ultra pro max',
      quantity: 0,
    },
  ]

  let [ productList, setProductList ] = useState(products)
  let [ totalAmount, setTotalAmount ] = useState(0)

  const incrementQuantity = (index)=>{
    let newProductList = [...productList]
    newProductList[index].quantity++
    setProductList(newProductList)
  }

  const decrementQuantity = (index)=>{
    let newProductList = [...productList]
    newProductList[index].quantity > 0 && newProductList[index].quantity--
    setProductList(newProductList)
  }

  useEffect(() => {
    setTotalAmount(productList.map(prod => prod.price * prod.quantity).reduce((acc, price) => acc + price, 0))
  }, [productList])

  const resetQuantity = () => {
    let newProductList = [...productList]
    newProductList.map((product) => {
      product.quantity = 0
    })
    setProductList(newProductList)
    setTotalAmount(0)
  }

  const removeItem = (index) => {
    let newProductList = [...productList]
    let newTotalAmount = totalAmount

    newTotalAmount -= newProductList[index].quantity * newProductList[index].price
    newProductList.splice(index, 1)
    setProductList(newProductList)
    setTotalAmount(newTotalAmount)
  }

  const addItem = (name, price) => {
    let newProductList = [...productList]
    newProductList.push({
      price: price,
      name: name,
      quantity:0
    });
    setProductList(newProductList)
  }

  
  return (
    <>
    <Navbar />
    <main className="container mt-5"> 
    <Additem addItem= {addItem}/>
    <ProductList productList={productList} incrementQuantity = {incrementQuantity}  decrementQuantity = {decrementQuantity} removeItem={removeItem} />
    </main>
    <Footer totalAmount = {totalAmount} resetQuantity = {resetQuantity}/>
    </>
  );
}

export default App;
