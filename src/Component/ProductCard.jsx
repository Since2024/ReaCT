import React from 'react'
 
 const ProductCard = ({title,image,price}) => {
   return (
     <div className='w-96 h-96 border rounded-md bg-amber-100'>
 
         <div className='mx-auto w-full'>
             <img src={image} alt='product' className='w-52 h-60 rounded-md mx-auto'/>
         </div>
       <div>{title}</div>
       <div>{price}</div>
 
     </div>
   )
 }
 
 export default ProductCard