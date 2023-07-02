import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Button, Modal} from "react-bootstrap"
import { Form, Navigate, useNavigate } from 'react-router-dom'
import Model from "react-bootstrap/Modal"

function Post() {

    const [posts,setPosts] = useState([])
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    const [updatePost,setUpdatePost] = useState({})
   
    

    useEffect(()=>{
        axios.get('/posts').then(res=>{
            console.log(res.data);
            setPosts(res.data)}).catch(err=>console.log(err))
    },[])

    const handleDelete=(id)=>{
        axios.delete(`/delete/${id}`)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))

        window.location.reload()
    }

    const navigate = useNavigate()

    // const handleUpdate=(post)=>{
            // setUpdatePost(post)    //     handleShow()
    // }

  return (

    <div style={{width:"90%",textAlign:"center",margin:"auto auto"}}>

        <h1 style={{margin:"1rem"}}>Post Page</h1>
        <Button 
        variant='outline-primary' 
        style={{width:"70%", margin:"30px"}} 
        onClick={()=>navigate(-1)}>Back</Button>
     
    {/* Update */}
{/* 
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update a post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group>
                    <Form.Control style={{marginBottom:"1rem"}} placeholder="title"/>
                    <Form.Control style={{marginBottom:"1rem"}} placeholder="description"/>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}

    {/* Post */}

        {posts ? (

            <>

            {posts.map((post)=>{
            return(

            <div 
            key={post._id}
            style={{border:"solid lightgrey 1px",
            borderRadius:"8px",
            marginBottom:"1rem",
            padding:"15px",}}>

            <h3 >{post.title}</h3>
            <p>{post.description}</p>

            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
            <Button 
            variant='outline-info' 
            style={{width:"100%" ,marginRight:"1rem"}}
            // onClick={()=>handleUpdate(post)}
            >Update
            </Button>

            <Button 
            variant='outline-danger'
             style={{width:"100%" ,marginRight:"1rem"}} 
            onClick={()=>handleDelete(post._id)}
            >Delete
            </Button>
            </div>
            
            </div>
            )   
        })}

        </>

        ) : ""}
       {/* Back */}

       
    </div>

    
  )
}

export default Post