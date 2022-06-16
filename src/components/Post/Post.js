import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile,faComment,faPlus,faHeart } from '@fortawesome/free-solid-svg-icons'
import {addComment,addLike} from '../../lib/Social-Network-Library'

function Post (props) {
    const [post,setPost] = useState({
    _id: props.p._id,
    title : props.p.title,
    text: props.p.content,
    commentaires: props.p.comments,
    date: new Date (props.p.date),
    nbLike : props.p.likes,
    })
    const[newComm,setNewComT] = useState('')
    

    const updateComment = (e) => {
        setNewComT(e.currentTarget.value)
    }
    const addCom = () => {
        savCom()
        props.updateList()
        setNewComT("")
    }

    const savCom = async () => {
        console.log(post._id)
        let result = await addComment(post._id,newComm) ; 
        if (result.success) {
            console.log("ok")
        }
    }

    const savLike = async () => {
        let result = await addLike(post._id); 
        if (result.success) {
            props.updateList()
        }
        else {console.log("ko",result.message)}
    }
    
    return ( 
        <div className="card" style={{ width: "25rem", height: "30rem"  }}>
            <div className="card-header text-center"><h2>{post.title}</h2><p></p></div>
            <div className="card-body">
                <p>{post.text}</p>
                <div>{post.nbLike.length}<FontAwesomeIcon onClick={() => savLike()} icon={faFaceSmile} />
                    <div>{post.nbLike.map((like,index) => <span key={index}><FontAwesomeIcon icon={faHeart} />{like.firstname}</span>)}</div>
                </div>
                <div className="form-group">
                    <h4>Ajouter un commentaire</h4>
                    <textarea className="comment" id="comment" onChange={updateComment} rows="2" value={newComm} ></textarea>
                    <FontAwesomeIcon icon={faPlus} onClick={() => {addCom()}} />
                </div>  
                <div>{post.commentaires.map((coms) =>  <div key={coms._id}><FontAwesomeIcon icon={faComment} />{coms.content}</div> )}</div>
                <div className="card-footer">
                  <small className="text-muted">{post.date.toLocaleString('fr-FR', {weekday: "long", year: "numeric", month: "long", day: "numeric"})}</small>
                </div>
            </div>
        </div>
     );
}

export default Post ;