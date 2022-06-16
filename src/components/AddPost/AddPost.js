import React,{ useState }  from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {createPost,getPosts} from '../../lib/Social-Network-Library'

function AddPost(props) {
    const [newPost,setNewPost]=useState(
        {titre:'',
        texte:''
    })
    const handleChangeTitle = (e) => {
        setNewPost({titre:e.currentTarget.value,texte:newPost.texte})
    }
    const handleChangeTexte = (e) => {
        setNewPost({titre:newPost.titre,texte:e.currentTarget.value})
    }

    const savePost = () => {
        (async function () {
            const pAPI = await createPost(newPost.titre,newPost.texte)        
            if (pAPI.success) {
                const nPostsApi =  await getPosts()
                props.add(nPostsApi.posts)
            }
            else console.log('erreur')
        })()
        setNewPost({titre:'',texte:''})
    }

    return ( <div id="divInput">
        <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Titre </span>
        <input type="text" className="form-control" placeholder="Titre de la publication" name='title' value={newPost.titre} onChange={handleChangeTitle}  />
        </div>
        <div className="input-group">
        <span className="input-group-text">Texte : </span>
        <textarea className="form-control" aria-label="With textarea" name='desc' value={newPost.texte} onChange={handleChangeTexte}></textarea>
        </div>
        <button type="button" className="btn btn-primary" onClick={() => {
            savePost()
        }}>Enregistrer</button>
        <button type="button" className="btn btn-warning" onClick={() => {
        props.undo()
        }}>Annuler</button>
    </div> );
}

export default AddPost;