import React, { useContext, useEffect, useState } from 'react'
//import { useEffect } from "react";
//import { useState } from "react";
import Axios from 'axios';
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link, useLocation, useNavigate } from "react-router-dom";
import moment from "moment"
import { AuthContext } from "../context/authContext";
import Menu from '../components/Menu'
const Single = () => {
  const {currentUser}=useContext(AuthContext)
  const [post, setPost] = useState({});
  const navigate = useNavigate();
  const location = useLocation()
  const postId = location.pathname.split("/")[2]
  //console.log(location)
  //const cat = useLocation().search
  useEffect(()=> {
    Axios.get(`/get/${postId}`).then((response)=> {
      console.log("Single Test",response.data)
      setPost(response.data)
    })
  },[postId])
  
  const handleDelete = async ()=> {
    await Axios.delete(`/get/${postId}`)
    navigate("/")
  }
  return (
    <div className='single'>
      <div className='content'>
      <img src={post?.img} alt='' />
      
        {/* <img src='https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt=''/> */}
        
        <div className='user'>
        {post.userImg && <img src={post?.userImg} alt='' />}
          {/* <img src='https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt=''/> */}
          <div className='info'>
            <span>{post.username}</span>
            <p>Post {moment(post.date).fromNow()}</p>
          </div>
          {currentUser?.username === post.username && (
          <div className='edit'>
           <Link to={`/write?edit=2`}>
              <img src={Edit} alt=''/>
           </Link> 
            
            <img onClick={handleDelete} src={Delete} alt=''/>
          </div>
          )}
        </div>
        
        <h1>{post.title}</h1>
        {post.desc}
        {/* <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
        // <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!</p> */}
      </div>
      <Menu cat={post.cat}/>
    </div>
  )
}

export default Single
