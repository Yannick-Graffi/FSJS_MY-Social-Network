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
    date: new Date (props.p.date),
    nbLike : props.p.likes,
    })
    const[newComm,setNewComT] = useState('')
    

    const updateComment = (e) => {
        setNewComT(e.currentTarget.value)
    }
    const addCom = () => {
        savCom()
        setNewComT("")
        props.updateList()
        console.log(newComm)
    }

    const savCom = async () => {
        let result = await addComment(post._id,newComm) ; 
        if (result.success) {
            console.log("ok")
        }

    }
    
    return ( 
<<<<<<< HEAD
        <div className="card" style={{ width: "25rem", height: "30rem"  }}>
            <div className="card-header text-center"><h2>{post.title}</h2><p></p></div>
            <div className="card-body">
                <p>{post.text}</p>
                <div>{post.nbLike.length}<FontAwesomeIcon icon={faFaceSmile} /></div>
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
=======
        <div>
            <div><h2>{post.title}</h2><p>{post.date}</p></div>
            <p>{post.text}</p>
            <div>{post.nbLike.length}<FontAwesomeIcon icon={faFaceSmile} /></div>
            
            <div className="form-group"><FontAwesomeIcon icon={faComment} />
                 <textarea className="comment" id="comment" onChange={updateComment} rows="2" ></textarea>
                 <FontAwesomeIcon icon={faPlus} onClick={addComment} />
            </div>  
           <div>{post.commentaires.map((coms,index) =>  <div key={index}><FontAwesomeIcon icon={faComment} />{coms.content}</div> )}</div>
>>>>>>> d7622ccfdf3fe682e0a4679ac823487070792d32
        </div>
     );
}

export default Post ;