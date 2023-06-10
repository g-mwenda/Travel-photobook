
import { useContext} from 'react'
import { AuthContext } from '../context/AuthContext'

export default function Profile() 
{
    const {current_user,login} = useContext(AuthContext)
    console.log("Current user in profile " , current_user)
     
  return (
   
    <div className='text-center' style ={{textAlign:"center"}}>
      {current_user && current_user?
      <>
<h1> Profile </h1>
<h5> Username : {current_user && current_user.username} </h5>
<h5> Email : {current_user && current_user.username}</h5>
<h5> Joined on :{current_user && current_user.created_at}</h5>
   </>:
   <div className='text-danger'>
    Login to access this page
   </div>
}
   </div>

  )
}
