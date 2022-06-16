import React from 'react';
import Post from '../../components/Posts/Posts';
import { getPosts } from '../../lib/Social-Network-Library'


function FilActu() {

    const getPost = async () => {
        let posts = await getPosts(0, 20); // Utilisation de la fonction login
        console.log(posts)
    }

    return ( <div>{getPost}</div> );
}

export default FilActu;