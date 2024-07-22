import { db } from "../db.js";
export const getPosts = (req, res) => {
    const q=req.query.cat 
    ? "SELECT * FROM posts WHERE cat=?"
    //? "SELECT * FROM posts1"
    : "SELECT * FROM posts"
    db.query(q,[req.query.cat],(err,result)=>{
      console.log(result)
      res.send(result)
    })
}

export const getPost=(req,res)=>{
    const q =
     "SELECT p.id, `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`,`date` FROM user u JOIN posts p ON u.id = p.uid WHERE p.id = ? ";

   db.query(q, [req.params.id], (err, data) => {
     if (err) return res.status(500).json(err);

     return res.status(200).json(data[0]);
   });
}

export const addPost=(req,res)=>{
    res.json("From controllers")
}

export const deletePost=(req,res)=>{
  const postId = req.params.id;
  const q = "DELETE FROM posts WHERE id = ?";

  db.query(q, [postId], (err, data) => {
    if (err) return res.status(403).json("You can delete only your post!");

    return res.json("Post has been deleted!");
  });
}

export const updatePost=(req,res)=>{
    res.json("From controllers")
}