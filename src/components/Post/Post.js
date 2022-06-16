import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile,faComment,faPlus } from '@fortawesome/free-solid-svg-icons'
import {addComment} from '../../lib/Social-Network-Library'

function Post (props) {
    const [post,setPost] = useState({
    postId: props.p.postId,
    title : props.p.title,
    text: props.p.content,
    commentaire: props.p.comments,
    date: props.p.date,
    nbLike : props.p.likes,
    
    })
    const[newComm,setNewCom] = useState('')
    //{post.commentaire.map(comment => <div>comment</div>)}

    const updateComment = (e) => {
        setNewCom(e.currentTarget.value)
    }
    const addComment = (newComm) => {
        addComment(post.postId,newComm) 
        newComm=''
    }
    
    return ( 
        <div>
            <div><h2>{post.title}</h2><p>{post.date}</p></div>
            <p>{post.text}</p>
            <div>{post.nbLike.length}<FontAwesomeIcon icon={faFaceSmile} /></div>
            
            <div className="form-group"><FontAwesomeIcon icon={faComment} />
                 <textarea className="comment" id="comment" OnChange={updateComment} rows="2" ></textarea>
                 <FontAwesomeIcon icon={faPlus} onClick={addComment} />
            </div>  
        </div>
     );
}

export default Post ;