import React, { Component, Fragment } from 'react';
import './DetailPost.css';
import axios from 'axios';

class DetailPost extends Component {
    state = {
        post: {}
    }

    componentDidMount() {
        let id = this.props.match.params.id;

        axios.get(`https://my-json-server.typicode.com/fachri-amin/fake-api/posts/${id}`)
            .then((res) => {
                let data = res.data
                this.setState({
                    post: data
                });
            })
    }


    render() {
        return (
            <div className="container">
                <h1>{this.state.post.title}</h1>
                <p>{this.state.post.body}</p>
            </div>
        )
    }
}

export default DetailPost;