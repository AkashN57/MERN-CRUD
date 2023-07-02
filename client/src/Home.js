import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom"
import {Button} from "react-bootstrap"

function Home() {
    
   const navigate = useNavigate()

  return (
    <div style={{width:"90%",margin:"auto auto",textAlign:"center"}}>

        <h1 >Home Page</h1>

        <Button 
        variant='outline-dark' 
        style={{width:"70%",padding:"10px",margin:"7px"}} 
        onClick={()=> navigate('/Create')}
        >Create</Button>
      <Button 
        variant='outline-dark' 
        style={{width:"70%",padding:"10px",margin:"7px"}} 
        onClick={()=> navigate('/create/posts')}
        >Posts</Button>
    </div>
  )
}

export default Home