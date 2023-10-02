import React from "react"
import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

 const Update = () => {

    const [book, setBook] = useState({
        title: "",
        desc: "",
        price: null,
        cover: "",
    });
    
    const navigate = useNavigate()

    const location = useLocation()
    const bookId = location.pathname.split('/')[2]

    const handleChange = (e) =>{
        setBook((prev) => ({...prev,[e.target.name]:e.target.value}))
    }

    const handleClick = async(e) =>{
        e.preventDefault()
        try {
            await axios.put("http://localhost:8800/books/"+bookId,book)
            navigate("/")
        } catch (err) {
            console.log(err);
        }
    }

    console.log(book);
    return (
    <div className="form">
        <h1>
        Update Book 
        </h1>
        <input type="text" placeholder="title"
        onChange={handleChange}id="" name="title" />

        <input type="text" placeholder="desc"
        onChange={handleChange} id="" name="desc"/>

        <input type="number" placeholder="price" 
        onChange={handleChange}  id="" name="price"/>

        <input type="text" placeholder="cover"
         onChange={handleChange}  id="" name="cover"/>

         <button className="formButton" onClick={handleClick}>
            Update
         </button>
    </div>
    ) 
}


export default Update