import React, { useEffect } from "react";
import "./Home.css";
import { useDispatch } from "react-redux";
import Navbar from "../Navbar/Navbar";

const Home = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    fetchApi1();
    fetchApi();
  })
  
  async function fetchApi1() {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json();
    dispatch({type:'maindata',data:data})
    console.log(data)
  }

  async function fetchApi(){
    const res = await fetch("https://randomuser.me/api/?results=20");
    const data = await res.json();
    console.log(data)
    dispatch({ type: "randomuserdata", data: data });
  };

  return (
    <>
      <Navbar/>
    <div className="home">
      <h1>Welcome to React</h1>
      <p style={{ width: "50rem" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
        tempore nostrum vel deserunt maxime non libero. Debitis, pariatur,
        voluptatem cupiditate eligendi impedit eaque magni officiis quasi
        voluptatum aliquam dignissimos natus. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Quae, maiores nam! Tempora iste enim
        consequuntur maxime repellat deserunt eius suscipit, temporibus unde
        mollitia officiis ab natus ea et deleniti illo.
      </p>
    </div>
    </>
  );
};

export default Home;
