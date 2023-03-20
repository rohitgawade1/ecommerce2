import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Products.css";
import {useNavigate} from 'react-router-dom'
import Navbar from "../Navbar/Navbar";
const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const data = useSelector((state) => state.MainData);
  const categoryData = useSelector(state => state.CategoryData)
  const eleData = data.filter((ele) => {
    return ele.category === 'electronics'
    
  })
  // dispatch({type:'catagoryData', data:eleData})

  function fetchApi(e) {
    const categoryData = data.filter((ele) => {
      return ele.category === e.target.innerText;
    });
    // console.log(categoryData)
    // setCData(categoryData);
    dispatch({type:'catagoryData', data: categoryData})
    // console.log(data)
  }
  const handleClick = (ele) => {
    // console.log(ele)
    navigate(`/productdetails?${ele.id}`)
  }

  return (
    <>
      <Navbar/>
    <div className="products">
      <div className="products-container">
        <div className="left-container">
          <span onClick={fetchApi}>electronics</span>
          <span onClick={fetchApi}>jewelery</span>
          <span onClick={fetchApi}>men's clothing</span>
          <span onClick={fetchApi}>women's clothing</span>
        </div>
        <div className="right-container">
          <ul>
            { categoryData.length>0 ? categoryData.map((ele) => {
              return <li style={{cursor:'pointer'}} onClick={()=>{handleClick(ele)}}>{ele.title}</li>;
            }):eleData.map((ele) => {
              return <li style={{cursor:'pointer'}} onClick={()=>{handleClick(ele)}}>{ele.title}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default Products;
