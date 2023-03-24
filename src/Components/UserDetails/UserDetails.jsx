import React, { useState } from "react";
import "./userdetails.css";
import {  useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
const UserDetails = () => {
  // const dispatch = useDispatch();
  const [maleData, setMaleData] = useState([])
  const [femaleData, setFemaleData] = useState([])
  const [gender, setGender] = useState('')
  const [userDataMain, setUserDataMain] = useState([])
  let userData = useSelector((state) => state.RandomUserData);
  // setUserDataMain(userData)
//   console.log(userData.results);
 

  const handleChange = (e) => {
    // console.log(e.target.value)
    setGender(e.target.value)
    if(e.target.value === 'male'){
        const dataMale = userData.results.filter((ele) => {
            return ele.gender === 'male'
        })
        setMaleData(dataMale)
        setUserDataMain([])
        // console.log(maleData)
    }
    else if(e.target.value === 'female'){
        const dataFemale = userData.results.filter((ele) => {
            return ele.gender === 'female'
        })
        setFemaleData(dataFemale)
        setUserDataMain([])
        // console.log(maleData)
    }
    else if(e.target.value === 'all'){
      setUserDataMain([])
    }
    
  }
  // console.log(maleData)
  // console.log(userData)
  const handleChangeFilter = (e) => {
  let data =  userData.results.filter((ele) => {
      return ele.email.includes(e.target.value)
    })
    setUserDataMain(data)
    console.log(userDataMain)
  }
  return (
    <>
      <Navbar/>
    <div className="userdatails">
      <h1>User Details</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
        repudiandae incidunt. Soluta enim sed voluptate cumque error saepe nulla
        molestiae velit consequuntur repudiandae perspiciatis dolores, ducimus
        consequatur, ab ullam libero! Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Dolore facere quos et maiores mollitia distinctio iste
        harum reiciendis quo odio sint, corporis fuga deleniti commodi a unde
        voluptates cum. Eaque!
      </p>
      <div className="gender">
        <input value='all' onChange={handleChange} type="radio" name="gender" /> All
        <input value='male' onChange={handleChange} type="radio" name="gender" /> Male
        <input value='female' onChange={handleChange} type="radio" name="gender" /> Female
        <input  onChange={handleChangeFilter} type="text" />
      </div>
      <div className="userdetails-container">
        <table className="table">
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
          {userDataMain.length > 0 ? userDataMain.map((ele) => {
            return <tr>
            <td><img src={ele.picture.medium} alt="" /></td>
            <td>{ele.name.first}</td>
            <td>{ele.email}</td>
            <td>{ele.gender}</td>
          </tr>;
          }) :(gender === 'all' || gender === '' ? userData.results && userData.results.map((ele,key) => {
           return <tr>
              <td><img src={ele.picture.medium} alt="" /></td>
              <td>{ele.name.first}</td>
              <td>{ele.email}</td>
              <td>{ele.gender}</td>
            </tr>;
          }) : gender === 'male' ? maleData.map((ele,key) => {
            return <tr>
               <td><img src={ele.picture.medium} alt="" /></td>
               <td>{ele.name.first}</td>
               <td>{ele.email}</td>
               <td>{ele.gender}</td>
             </tr>;
           }): gender === 'female' ? femaleData.map((ele,key) => {
            return <tr>
               <td><img src={ele.picture.medium} alt="" /></td>
               <td>{ele.name.first}</td>
               <td>{ele.email}</td>
               <td>{ele.gender}</td>
             </tr>;
           }): '')}
        </table>
      </div>
    </div>
    </>
  );
};

export default UserDetails;
