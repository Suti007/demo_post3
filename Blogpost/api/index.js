import express from "express";
import bodyParser from 'body-parser'
import cors from 'cors'
import multer from 'multer'
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json()); //Otherwise we won't be able to send data to database
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({storage});
  
  app.post("/api/upload", upload.single("file"), function (req, res) {
    const file = req.file;
    res.status(200).json(file.filename);
  });

app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/get",postRoutes);


app.get('/test',(req,res)=>{
  res.json("It worked")
})

app.listen(8800, () => {
    console.log("Connected!");
  });