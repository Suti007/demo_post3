import React from 'react'
import Axios from 'axios';
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import { useState, state } from 'react'
import { Link,useNavigate } from 'react-router-dom'
const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err,setError] = useState(null)
  const navigate = useNavigate();
  const { currentUser }=useContext(AuthContext);
  console.log(currentUser)
  const { login } = useContext(AuthContext);
  
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const res = await Axios.post("auth/login", inputs);
      //const res = await Axios.post("http://localhost:8800/api/insert", inputs);
      //console.log(res)
      await login(inputs)
      navigate("/")
    } catch (err) {
      //console.log(err)
      setError(err.response.data)
    }
  };
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input required type='text' placeholder='username' name='username' onChange={handleChange}/>
        <input required type='password' placeholder='password' name='password' onChange={handleChange}/>
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>
          Don't you have an account?
          <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  )
}

export default Login
