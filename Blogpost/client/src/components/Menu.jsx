import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios, * as others from 'axios';
// const posts = [
//   {
//     id: 1,
//     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//     img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   },
//   {
//     id: 2,
//     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//     img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   },
//   {
//     id: 3,
//     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//     img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   },
//   {
//     id: 4,
//     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//     img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   },
// ]
const Menu = ({cat}) => {
  const [posts, setPosts] = useState([]);
  // const cat=useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const res = await axios.get(`/get${cat}`);
        const res = await axios.get(`/get/?cat=${cat}`);
        setPosts(res.data);
        console('posts=',res.data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div className='menu'>
      <h1>Other posts you may like</h1>
      {posts.map((post)=> (
        <div className='post' key={post.id}>
          <img src={post.img} alt='' />
          <h2>{post.title}</h2>
          <button>Read More</button>

        </div>
      ))}
      
    </div>
  )
}

export default Menu
