import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useParams } from 'react-router-dom'

export default function Home() {
    {/* craete object to store data*/}
    const [users,setUsers]=useState([])

    ////2//to get id to delete user
    const {id}=useParams()

    {/*useEffect -- to tell react that ur component need to do sm task aftr pge is redered,
so everytime page reload it will show user data*/}

{/*useEffect--> to load user info everytime page reload
    console.log("show users");
"[]"--> empty array-->so it runs only once on page render--> to avaood it getting in infinite loop*/}
useEffect(()=> {
    loadUsers();

},[])

{/* "async"--> as java loads line by line, use async
so, "await" -- >unless this request gets complete it won't execute next line*/}

const loadUsers=async()=>{
    const result = await axios.get("http://localhost:8080/users")
    setUsers(result.data);
    //console.log(result.data);--> to display on console
//setUsers--> to display on display screen
};

////1//for deleting user --> to provide id here -->use useParram
const deleteUser=async (id)=>{
  await axios.delete(`http://localhost:8080/user/${id}`)
  loadUsers()
}

  return (
    <div className='container'>
        <div className='py-4'>
        {/*in Home.js --creating table copy from bootstrap--doc--table*/}
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">NAME</th>
      <th scope="col">USERNAME</th>
      <th scope="col">EMAIL</th>
      <th scope="col">ACTION</th>
    </tr>
  </thead>
  <tbody>

    {/* map -- to get dynamic data from db*/}
    {
        users.map((user , index)=> (
        <tr>
            <th scope="row" key={index}> {index+1} </th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
                <Link className="btn btn-primary mx-2"
                 to={`/viewuser/${user.id}`}>View</Link>
                {/* for edit user by id*/}
                <Link className="btn btn-outline-primary mx-2" 
                to={`/edituser/${user.id}`}
                > Edit</Link>
                {/*////3//*to delete user */}
                <button className="btn btn-danger mx-2"
                onClick={()=>deleteUser(user.id)}>Delete</button>

            </td>
       </tr>
        ))
    }
  </tbody>
</table>

        </div>
    </div>
  )
}
