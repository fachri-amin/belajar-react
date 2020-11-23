import React, {Component, Fragment} from 'react';
import './BlogPost.css';
import Post from '../../components/Post/Post';
import axios from 'axios';

class BlogPost extends Component{

    state = {
        post : [],
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((result)=>{
            this.setState({
                post:result.data
            })
        })            
    }

    render(){
        return (
            <Fragment>
                <p>Blog Post</p>
                <hr />
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} title={post.title} desc={post.body} />
                        {/* props key harus ada agar setiap component punya keunikan, jika tidak maka akan ada warning */}
                    })
                }

            </Fragment>
        )
    }
}

export default BlogPost;