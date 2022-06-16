import React, { useEffect, useState } from 'react';
import {getPosts} from '../../lib/Social-Network-Library'
import Post from '../Post/Post';

function PostsList () {
    const [posts,setPosts]= useState([])
    
    useEffect(() => {
    (async function () {
        const pAPI = await getPosts()        

        if (pAPI.success) {
            setPosts(pAPI.posts)
        }
        else console.log('erreur')
    })()
}, [])
    return ( <div>
                
                 {posts.map((post,index) => <Post key={index} p={post}/> )}
            </div>);
}

export default PostsList ;