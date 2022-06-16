import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile,faComment,faPlus } from '@fortawesome/free-solid-svg-icons'


function Post (props) {
    const [post,setPost] = useState({title : props.p.title,
    text: props.p.content,
    commentaire: props.p.comments,
    date: props.p.date,
    nbLike : props.p.likes
    })
    //{post.commentaire.map(comment => <div>comment</div>)}
    return ( 
        <div>
            <div><h2>{post.title}</h2><p>{post.date}</p></div>
            <p>{post.text}</p>
            <div>{post.nbLike.length}<FontAwesomeIcon icon={faFaceSmile} /></div>
            
            <div className="form-group"><FontAwesomeIcon icon={faComment} />
                 <textarea className="comment" id="comment" rows="2"></textarea>
                 <FontAwesomeIcon icon={faPlus} />
            </div>  
        </div>
     );
}

export default Post ;