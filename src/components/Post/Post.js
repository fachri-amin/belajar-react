import React from 'react';
import './Post.css';

const Post = (props)=>{
    return (
        <div className="post">
            <div className="img-thumb">
                <img src="http://placeimg.com/200/150/nature" alt="dummy"/>
            </div>
            <div className="content">
                <p className="title">{props.data.title}</p>
                <p className="desc">{props.data.body}</p>
                <button className="btn btn-danger" onClick={()=>props.remove(props.data.id)}>Remove</button>
            </div>
        </div>
    )
}

export default Post;