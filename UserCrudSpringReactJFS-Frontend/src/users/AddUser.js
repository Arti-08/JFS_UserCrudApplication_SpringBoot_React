import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export default function AddUser() {
  //8. usenavigate--> to redirect to Home page on submit is clicked
  let navigate=useNavigate()

   {/*useState()-->to post or save data into database*/}
   {/*1. initializing object with empty string*/}
   const[user,setUser]=useState({
    name:"",
    username:"",
    email:""
   })

   

   {/*2.deconstruct object*/}
   const{name,username,email}=user

   {/* 4. create onInputChange with event & setUser with target values-->to pass input values to useState object and 5. in input div-->call onInputChange with help of event e */}
   {/* ... --> speed operator--> will keep on adding new user object */}
   const onInputChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
   }

   //6. onSubmit for submit btn-->to post user data to db and display on homepage
   //7. pass this onSubmit into the form-->create <form> heading
   const onSubmit= async(e)=>{
    //so it won't show any default url
    e.preventDefault();
    //acios --> to post data
    await axios.post("http://localhost:8080/user",user)
    //9.navigate-->  navigate to home page on submit btn
    navigate("/")
   } 



   {/*3. link user attributes with input value property in div*/}
  return ( 
    <div className ="container">
      <div className="row">
        {/*regiter user div */}
        <div className="col-md-6 offset-md-3 border rouded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>


         <form onSubmit={(e)=> onSubmit(e)}>
          {/* to input name*/}
          <div className="mb-3">
            <label htmlFor="Name" classNAme="form-label">
            Name
            </label>
            <input
            type={"text"}
            className="form-control"
            placeholder="Enter your name"
            name="name"
            value={name}
            onChange={(e)=>onInputChange(e)}
            />
          </div>

          {/*Username*/}
          <div className="mb-3">
            <label htmlFor="username" classNAme="form-label">
            Username
            </label>
            <input
            type={"text"}
            className="form-control"
            placeholder="Enter your username"
            name="username"
            value={username}
            onChange={(e)=>onInputChange(e)}
            />
          </div>

           {/*email*/}
          <div className="mb-3">
            <label htmlFor="Name" classNAme="form-label">
            Email
            </label>
            <input
            type={"text"}
            className="form-control"
            placeholder="Enter your e-mail address"
            name="email"
            value={email}
            onChange={(e)=>onInputChange(e)}
            />
          </div>

          {/*submit & cancel buttons*/}
          <button type="submit" className="btn btn-outline-primary">Submit</button>
          <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
          </form>
        </div>
      </div>
    </div>
    
  )
}
