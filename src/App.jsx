import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CategoryContext from './context/category';
import Home from './components/Home';


const App =()=> {
  const [view, setView] = useState(["jewelery"]);
    const fetchProduct = async () => {
      try{
        const res = await  fetch('https://fakestoreapi.com/products/1')
        const data =await res.json()
        console.log(data);
      }catch(error){
        console.log("Error Their!!!!!!!");
      }
    }
  
useEffect(() => {
    fetchProduct()
  }, []) 

  return (
    <CategoryContext.Provider value={{view, setView}}>
    <div className='bg-zinc-800 text-white  h-auto min-h-screen' >
      <Navbar/>
     <h1 className='text-3xl text-center text-white'>{view} Products</h1>
     <Home/>
      <Footer/>
    </div>
    </CategoryContext.Provider>
  )
}

export default App
