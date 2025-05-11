import React from 'react'
 import { useState, useEffect } from 'react';
 import axios from 'axios'
 import ProductCard from './ProductCard';

 const ProductList = () => {
     const [products,setProduct]=useState([]);
 
     //fetch the data using axios
     const fetchProduct=async()=>{
     const res=await axios.get("https://fakestoreapi.com/products")
     setProduct(res.data)
     console.log(res.data,"Data Fetch");
     }
     
     useEffect(()=>{
         fetchProduct();
     },[])
     
   return (
     <div className='grid grid-cols-3 gap-5 justify-items-center'>
         {products.map((val,i)=>{
             return(
                 <div key={val.id}>
                     <ProductCard title={val.title} image={val.image} price={val.price}/>
                    
 
                 </div>
             )
         })}
     </div> 
 
 
   )
 }
 
 export default ProductList