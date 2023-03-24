import React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";

const Home = () => {

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
