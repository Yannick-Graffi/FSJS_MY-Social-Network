import React from 'react';
import Post from '../../components/Posts/Post';
import { getPosts,createPost,register,login } from '../../lib/Social-Network-Library/';


function FilActu() {

    const getPost = async () => {
        let posts = await getPosts(0, 20); 

        console.table(posts)
    }

    const createP = () => {
        register("firstname", "lastname", "email", "password")
        login('email', "password") 
        createPost("TEST1", "UN SUPER TESTTTT")// Utilisation de la fonction login
        //console.table(posts)
    }

    return ( <div>{getPost()}</div> );
}

export default FilActu;