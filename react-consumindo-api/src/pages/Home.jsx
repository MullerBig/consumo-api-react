import axios from "axios"
import "../services/api.js"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../css/Home.css'
import React from "react";
import blogFetch from "../services/api";

const Home = () => {

    const[posts, setPosts] = useState([])

    const getPosts = async() => {
        
        try {
            const response = await blogFetch.get('/posts')
            
            const data = response.data
            setPosts(data)

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {

        getPosts()

    }, [])

    return (
        <div className="home">
            <h>Ultimos posts</h>
            {posts.lenght === 0? <p>Carregando</p> : (
                posts.map((post) => (
                    <div className="post" key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <Link to={`/post/${post.id}`} className="btn"> 
                            Ler mais
                        </Link>
                    </div>
                ))
            )}
        </div>
    )
}

export default Home