import React, { useEffect, useState } from 'react';
import {getPosts,createPost} from '../../lib/Social-Network-Library'
import Post from '../Post/Post';

import AddPost from '../AddPost/AddPost';

function PostsList () {
    const [posts,setPosts]= useState([])
    
    useEffect(() => {
        updateFromAPI()
    }, [])

    const updateFromAPI = async () => {
            console.log('fonction')
            const pAPI = await getPosts()        
            if (pAPI.success) {
                setPosts(pAPI.posts)
            }
            else console.log('erreur')
        }

    const addPost = (PostsN) => {
        setPosts(PostsN)
    }

    return ( <div>
              <AddPost add={addPost} />  
                 {posts.map((post,index) => <Post  key={index} p={post}/> )}
            </div>);
}

export default PostsList ;