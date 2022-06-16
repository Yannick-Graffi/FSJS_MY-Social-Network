import React, { useEffect, useState } from 'react';
import {getPosts,createPost} from '../../lib/Social-Network-Library'
import Post from '../Post/Post';

import AddPost from '../AddPost/AddPost';

function PostsList () {
    const [posts,setPosts]= useState([])
    const [shwoAddInput,setAddInput]= useState(false)
    useEffect(() => {
        updateFromAPI()
    }, [])

    const updateFromAPI = async () => {
            console.log('fonction')
            const pAPI = await getPosts()        
            if (pAPI.success) {
                setPosts(pAPI.posts)
                console.log('update')
            }
            else console.log('erreur')
        }

    const addPost = (PostsN) => {
        setPosts(PostsN)
    }

    return (<div>
            <br />
            {(!shwoAddInput) ?
            <div>
                <button className='btn btn-info' onClick={() => setAddInput(true)}>Ajouter un post </button>
            </div>
            :
            <div>
                <br />
                <div className='container row align-items-center'>
                    <AddPost add={addPost} undo={() => setAddInput(false) }/>  
                </div>
            </div>
            }
            <br />
            <div className='container row align-items-center justify-content-start'>
                 {posts.map((post,index) => <Post  updateList={updateFromAPI} key={post._id} p={post}/> )}
            </div>
            </div>);
}

export default PostsList ;