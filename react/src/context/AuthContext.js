import React, { createContext , useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from "sweetalert2"
export const AuthContext = createContext()

export function AuthProvider({children}) 



{
    const nav = useNavigate()
    const [onChange, setonChange] = useState (false)
    const [current_user, set_currentUser] = useState()
    
    
    //REGISTER


     const register = (username, email, password) => {
      fetch("/users/adduser"  , {
         method:  "POST",
         headers: {"Content-Type":"application/json"},
         body: JSON.stringify({username,email,password})
      })
      .then((res)=>res.json())
      .then((response)=>{
          if(response.error){
            
          Swal.fire(
              'Error!',
              response.error,
              'error'
          )
          }
          else if(response.success){
                nav("/login")
               Swal.fire(
                  'Success!',
                  response.success,
                  'success')
                  
                  setonChange(!onChange)
    
          }
          else{
    
              Swal.fire(
                  'Error!',
                  "Something went wrong",
                  'error')
               
          }
         
          
      })
      
      }



    //Login
   const login = (username, password) => {
    fetch("/auth/login"  , {
       method:  "POST",
       headers: {"Content-Type":"application/json"},
       body: JSON.stringify({username,password})
    })
    .then((res)=>res.json())
    .then((response)=>{
        if(response.error){
          
        Swal.fire(
            'Error!',
            response.error,
            'error'
        )
        }
        else if(response.success){
              nav("/")
             Swal.fire(
                'Success!',
                response.success,
                'success')
                
                setonChange(!onChange)

        }
        else{

            Swal.fire(
                'Error!',
                "Something went wrong",
                'error')
             
        }
       
        
    })
    
    }
    
    
    //Logout

     const logout = (username, password) => {
      fetch("/auth/logout"  , {
         method:  "POST",
         headers: {"Content-Type":"application/json"},
        
      })
      .then((res)=>res.json())
    .then((response)=>{
       
      nav("/login")
      set_currentUser()
      setonChange(!onChange)
       
      Swal.fire(
        'Success',
        "Logout success",
        'success')
     
    })
  
  }
      
    

   
  
  //Fetch Current user

    useEffect(()=>{ 
        fetch("/current_user" , {
        method:  "GET",
        headers: {"Content-Type":"application/json"}
})
        
     .then((res)=> res.json())
     .then((response)=> {
          
          if (response.currentUser){
            set_currentUser(response.currentUser)
          }
          
         })
     
     

    },[onChange])
   

   const contextData = {
    login, 
    logout,
    register,
    current_user
   }
  return (
    <AuthContext.Provider value={contextData}>

      {children}

    </AuthContext.Provider>
  )






}
  




