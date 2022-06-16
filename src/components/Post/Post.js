import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile,faComment,faPlus } from '@fortawesome/free-solid-svg-icons'
import {addComment} from '../../lib/Social-Network-Library'

function Post (props) {
    const [post,setPost] = useState({
    _id: props.p._id,
    title : props.p.title,
    text: props.p.content,
    commentaires: props.p.comments,
    date: props.p.date,
    nbLike : props.p.likes,
    
    })
    
    const[newComm,setNewCom] = useState('')
    

    const updateComment = (e) => {
        setNewCom(e.currentTarget.value)
    }
    const addCom = async () => {
        let result = await addComment(post._id,newComm) ; 
        if (result.success) {
            console.log("ok")
        }
    }
    
    return ( 
        <div>
            <div><h2>{post.title}</h2><p>{post.date}</p></div>
            <p>{post.text}</p>
            <div>{post.nbLike.length}<FontAwesomeIcon icon={faFaceSmile} /></div>
            
            <div className="form-group"><FontAwesomeIcon icon={faComment} />
                 <textarea className="comment" id="comment" onChange={updateComment} rows="2" ></textarea>
                 <FontAwesomeIcon icon={faPlus} onClick={addComment} />
            </div>  
           <div>{post.commentaires.map((coms,index) =>  <div key={index}><FontAwesomeIcon icon={faComment} />{coms.content}</div> )}</div>
        </div>
     );
}

export default Post ;