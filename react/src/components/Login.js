import { useContext,useState } from "react"
import {AuthContext} from '../context/AuthContext'

export default function Login() {

     const {login} = useContext (AuthContext)
     const [username, setUsername] = useState()
     const [password, setPassword] = useState()

     const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(username)  
        // console.log (password)
        login(username,password)
     }

     return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh" }}>
  <form className="col-sm-6 bg-light rounded p-4 mt-5 border" onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
    <h3 style={{ textAlign: "center" }}>Login</h3>
    <div className="form-group mt-3">
      <label htmlFor="username" style={{ fontWeight: "bold", color: "#555555" }}>Username</label>
      <input
        type="text"
        id="username"
        className="form-control"
        onChange={(e) => setUsername(e.target.value)}
        style={{ width: "100%" }}
      />
    </div>
    <div className="form-group mt-3">
      <label htmlFor="password" style={{ fontWeight: "bold", color: "#555555" }}>Password</label>
      <input
        type="password"
        id="password"
        className="form-control"
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%" }}
      />
    </div>
    <button type="submit" className="mt-3 btn btn-primary" style={{ width: "100%", borderRadius: "25px", backgroundColor: "#ff7f50", borderColor: "#ff7f50" }}>
      Login
    </button>
  </form>
</div>

      
     )

}
