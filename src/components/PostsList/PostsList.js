import React, { useEffect, useState } from 'react';
import {getPosts} from '../../lib/Social-Network-Library'
import Post from '../Post/Post';

function PostsList () {
    const [posts,setPosts]= useState([{}])

    useEffect( function () {
        (async function () {

            const pAPI = await getPosts(0,100)
            console.log( "22")
            if (pAPI.success) {
                setPosts(pAPI.posts)

            }
            else console.log('erreur');

        }
        )()
    },[])

    return ( <div>
                 {posts.map((pt,index) => <Post key={index} p={pt}/> )}
            </div>);
}

export default PostsList ;