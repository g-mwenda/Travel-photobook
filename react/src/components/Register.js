import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'

export default function Register() 
{
    const { register } = useContext(AuthContext)
    
    const [username, setUsername] = useState()

    const [email, setEmail] = useState()
    
    const [password, setPassword] = useState()



    const  handleRegister = (e) =>{
        e.preventDefault()
    
      register(username, email ,  password)
    }
  return (
    <div className='container row my-7' style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh" }}>
        
        <form className='col-sm-6 bg-light rounded p-4 mt-5 border' >
            <h3>Create an Account to Proceed</h3>
            <div className="form-group mt-3">
                <label>Username</label>
                <input type="text" onChange={(e)=> setUsername(e.target.value) } className="form-control" placeholder="Enter username" />
            </div>

            <div className="form-group mt-3">
                <label>Email</label>
                <input type="text" onChange={(e)=> setEmail(e.target.value) } className="form-control" placeholder="Enter email" />
            </div>
           
            <div className="form-group mt-3">
                <label>Password</label>
                <input type="password" onChange={(e)=> setPassword(e.target.value) } className="form-control" placeholder="Password" />
            </div>
            <button type="submit" onClick={handleRegister} className="mt-3 btn btn-primary" style={{ width: "100%", borderRadius: "25px", backgroundColor: "#ff7f50", borderColor: "#ff7f50" }}>Register</button>
        </form>

        <div className='col-sm-6'></div>
    </div>
  )
}