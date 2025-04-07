import React from 'react'
import { useState } from 'react';
import { useContext, useEffect } from 'react'
import CategoryContext from '../context/category';
import {ShoppingBag} from 'lucide-react'

const Home = () => {
    const {view}=useContext(CategoryContext);
    console.log(view);
    const [data,setData]=useState()
    const categoryView = async () => {
        try{
            const res = await fetch(`https://fakestoreapi.com/products/category/${view}`)
            if(res){
                const categoryData= await res.json()
                setData(categoryData)
                console.log(data);
            }else{
                console.log("Error in Fetching Category Product");
            }
         
        }catch(error){
            console.log("Error in Fetching Category Product");
        }
    }
    useEffect(() => {
        categoryView()
    },[view])

    if(!data){
        return <h1 className='text-3xl'>Loading...</h1>
    }else

  return (
    <div className='flex justify-evenly g-25 flex-wrap'>
        {data.map((item, i) => <div className=' m-4 bg-white px-4 rounded-md' >
            <div className='w-[200px] h-[250px] relative'>
            <img src={item.image} className=' w-full h-full object-contain'/>
            </div>
            
            <div className='flex flex-col justify-center items-center my-2'>
                <h2 className='text-black font-semibold'>{`${item.title.slice(0,12)}..`}</h2>
                <h5 className='text-black font-semibold'>${item.price}</h5>
                <button className='bg-zinc-500 w-full flex justify-center py-2 rounded'><ShoppingBag color='white'/></button>
            </div>
        </div>
            )}
    </div>
  )

}

export default Home
