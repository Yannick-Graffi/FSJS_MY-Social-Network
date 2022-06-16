import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile, faFaceGrinWink } from '@fortawesome/free-solid-svg-icons'


function Post (props) {
    
    const [post,setPost] = useState({title : props.p.title,
    text: props.p.content,
    commentaire: props.comments,
    date: props.p.date,
    nbLike : props.p.likes
    })

    return ( 
        <div>
            <div><h2>{post.title}</h2><p>{post.date}</p></div>
            <p>{post.text}</p>
            <div>{post.nbLike.length}<FontAwesomeIcon icon={faFaceSmile} /></div>    
        </div>
     );
}

export default Post ;