import React from 'react'
import { useState,useEffect } from 'react'
import categoryContext from '../context/category'
import { useContext } from 'react'

const Navbar = () => {
    const [category, setCategories] = useState(["..Loading Menu"])
    const {setView,view} = useContext(categoryContext)
    const handleView=(item)=>{
        setView(item)
        // console.log(item);
    }

    useEffect(() => {
        const fetchCategory = async () => {

            try{
                const res = await fetch('https://fakestoreapi.com/products/categories')
                const data= await res.json();
                setCategories(data)
                 console.log(category);

            }catch(error){
                console.log("Error in Fetching Category");
            }
        }
        fetchCategory()
    }, []) 
  return (
    <div className='flex justify-between gap-4 py-4 text-2xl'>
        <div><h1 className='text-2xl'>CODE CODING</h1></div>
            <div>
                <ul className='flex gap-4'>
                    {
                        category.map((item, i) => 
                            <li key={i} className={view ===item?"text-gray-500" :"cursor-pointer"} onClick={()=> handleView(item)}>
                                {item.toUpperCase()}
                            </li>
                        )
                    }
                </ul>
            </div>
    </div>
  )
}

export default Navbar
