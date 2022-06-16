import React, { useState } from 'react';


function Post (props) {
    
    const [post,setPost] = useState(post = {title : props.title,
    content: props.content,
    commentaire: props.commentaire,
    nbVue: props.nbVue,
    nbLike : props.nbLike
    })

    const getSmiley =() => {
        const smiley = "&#128512"
        (post.nbLike >= 20 ) ? smiley='&#128526' :  (post.nbLike >= 10 ) ? smiley='&#128522' : null
    }
    

    return ( 
        <section>
            <div><h2>{post.titre}</h2><p>{post.date}</p></div>
            <p>{post.text}</p>
            <div>{post.nbVue} {getSmiley} {post.nbLike}</div>

        </section>
     );
}

export default Post ;