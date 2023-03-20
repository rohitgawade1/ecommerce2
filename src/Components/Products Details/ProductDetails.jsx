import React from 'react'
import './ProductDetails.css'
import {useSelector} from 'react-redux'
import Navbar from '../Navbar/Navbar'
const ProductDetails = () => {
  const id = (window.location.search).slice(1)
  let data = useSelector(state => state.CategoryData)

  const ele = data.filter((ele) => {
    return ele.id === +id
  })
  console.log(ele[0])
    
  return (
    <>
      <Navbar/>
    <div className='productdetails'>
      <div className='productdetails-container'>
        <h1>Electronic category</h1>
        <div className='details'>
            <img id='image' src={ele[0].image} alt="" />
            <div className='details-container'>
                <h3>Product Name</h3>
                <p>{ele[0].title}</p>
                <h3>Product Price</h3>
                <p>{ele[0].price}</p>
                <h3>Product Description</h3>
                <p>{ele[0].description}</p>
                <h3>Product Rating</h3>
                <p>{ele[0].rating.rate}</p>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductDetails