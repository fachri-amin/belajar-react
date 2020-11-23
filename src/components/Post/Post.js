import React from 'react';
import './Post.css';

const Post = (props)=>{
    return (
        <div className="post">
            <div className="img-thumb">
                <img src="http://placeimg.com/200/150/nature" alt="dummy"/>
            </div>
            <div className="content">
                <p className="title">{props.title}</p>
                <p className="desc">{props.desc}</p>
            </div>
        </div>
    )
}

export default Post;