import React, { useEffect, useState } from 'react'
import { useNavigate} from "react-router-dom"
import {Form,Button} from "react-bootstrap"
import axios from 'axios'
function Create() {

    const navigate = useNavigate()

    const [post,setPost] = useState({
        title:"",
        description:""
    })

   const handleChange=(e)=>{

         const {name,value} = e.target

       setPost((prev)=>{
        return{
            ...prev,
            [name]:value
        }
       })

    }

   const handleCreate=(e)=>{
    e.preventDefault();
    axios.post("/create",post).then(res => console.log(res)).catch(err=> console.log(err))
    navigate('posts')
   }
    
  return (

    <div style={{width:"90%",margin:"auto auto",textAlign:"center"}}>
        <h1>Create a post</h1>
        <Form>
            <Form.Group>
                <Form.Control name="title" value={post.title} onChange={handleChange} placeholder="Title" style={{marginBottom:"1rem"}}/>
                <Form.Control name="description" value={post.description} onChange={handleChange} placeholder="Description" style={{marginBottom:"1rem"}}/>
            </Form.Group>
            <Button variant='outline-success' style={{width:"70%", margin:"30px"}} onClick={handleCreate}>Create Post</Button>
        </Form>
        <Button variant='outline-primary' style={{width:"70%", margin:"30px"}} onClick={()=>navigate("/")}>Home</Button>
    </div>
  )
}

export default Create