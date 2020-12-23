import React, { Component, Fragment } from 'react';
import './BlogPost.css';
import Post from '../../components/Post/Post';
import axios from 'axios';
import API from '../../services/index';

class BlogPost extends Component {

    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: "",
            body: "",
            userId: 1
        },
        isUpdate: false,
        users: []
    }

    deleteHandler = (id) => {
        API.deleteBlog(id).then((res) => {
            console.log(res);
            if (res.status == 200) {
                alert('Delete Success');
            }
            else {
                alert('Delete Failed');
            }
        }, (err) => console.log(err));
    }

    getPostAPI = () => {
        API.getLatestBlog().then(result => {
            this.setState({
                post: result
            })
        });

        API.getUser().then((result) => {
            this.setState({
                users: result
            })
        })
    }

    componentDidMount() {
        // axios.get('https://my-json-server.typicode.com/fachri-amin/fake-api/posts')
        //     .then((result) => {
        //         this.setState({
        //             post: result.data
        //         })
        //     });
        this.getPostAPI();
    }

    formChange = (event) => {
        let formNewValue = { ...this.state.formBlogPost };
        let element_value = event.target.value;
        if (!this.state.isUpdate) {
            let timestamp = new Date().getTime();
            formNewValue["id"] = timestamp;
        }
        formNewValue[event.target.name] = element_value;
        this.setState({
            formBlogPost: formNewValue
        });
    }

    submitToAPI = () => {
        if (this.state.isUpdate) {
            this.putAPI();
        }
        else {
            this.postAPI();
        }
    }

    postAPI = () => {
        API.postNewBlog(this.state.formBlogPost).then((res) => {
            alert('New post added');
            this.getPostAPI();
            this.setState({
                formBlogPost: {
                    id: 1,
                    title: "",
                    body: "",
                    userId: 1
                }
            }, (err) => {
                alert(err);
            });
        });
    }

    updateHandler = (data) => {
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })

    }

    putAPI = () => {
        API.updateBlog(this.state.formBlogPost, this.state.formBlogPost.id).then((res) => {
            alert('Post was updated');
            this.setState({
                formBlogPost: {
                    id: 1,
                    title: "",
                    body: "",
                    userId: 1
                },
                isUpdate: false
            });
        }, (err) => alert(err))
    }

    detailHandler = (id) => {
        this.props.history.push(`/blog/detail/${id}`)
    }

    render() {
        return (
            <Fragment>
                <p>Blog Post</p>
                <hr />

                <form className="col-lg-6 rounded shadow-lg pb-3 mb-5 ml-4">
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input placeholder="Input post title here" value={this.state.formBlogPost.title} name="title" type="text" className="form-control" id="title" onChange={this.formChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="body">Body</label>
                        <textarea placeholder="Input post body here" value={this.state.formBlogPost.body} name="body" id="body" className="form-control" cols="30" rows="10" onChange={this.formChange}></textarea>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.submitToAPI}>Submit</button>
                </form>

                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.deleteHandler} update={this.updateHandler} goDetail={this.detailHandler} />
                        {/* props key harus ada agar setiap component punya keunikan, jika tidak maka akan ada warning */ }
                    })
                }

                {
                    this.state.users.map(user => {
                        return <p key={user.id}>{user.name} - {user.email}</p>
                    })
                }

            </Fragment>
        )
    }
}

export default BlogPost;