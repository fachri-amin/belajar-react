import React, {Component, Fragment} from 'react';
import './BlogPost.css';
import Post from '../../components/Post/Post';
import axios from 'axios';

class BlogPost extends Component{

    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: "",
            body: "",
            userId: 1
        },
        isUpdate: false,
    }

    deleteHandler = (id)=> {
        console.log(id);
        axios.delete(`https://my-json-server.typicode.com/fachri-amin/fake-api/posts/${id}`)
        .then((res)=>{
            if(res.status == 200){
                alert('Delete Success');
            }
            else{
                alert('Delete Failed');
            }
        });
    }

    getPostAPI = ()=>{
        axios.get('https://my-json-server.typicode.com/fachri-amin/fake-api/posts')
        .then((result)=>{
            this.setState({
                post:result.data
            })
        });    
    }

    componentDidMount(){
        axios.get('https://my-json-server.typicode.com/fachri-amin/fake-api/posts')
        .then((result)=>{
            this.setState({
                post:result.data
            })
        });            
    }

    formChange = (event)=>{
        let formNewValue = {...this.state.formBlogPost};
        let title = event.target.value;
        if(!this.state.isUpdate){
            let timestamp = new Date().getTime();
            formNewValue["id"] = timestamp;
        }
        formNewValue[event.target.name] = title;
        this.setState({
            formBlogPost: formNewValue
        });
    }

    submitToAPI = ()=>{
        if(this.state.isUpdate){
            this.putAPI();
        }
        else{
            this.postAPI();
        }
    }

    postAPI = ()=>{
        axios.post('https://my-json-server.typicode.com/fachri-amin/fake-api/posts', this.state.formBlogPost)
        .then((res)=>{
            alert('New post added');
            this.setState({
                formBlogPost:{
                    id: 1,
                    title: "",
                    body: "",
                    userId: 1
                }
            });
        }, (err)=>{
            alert(err);
        });
    }

    updateHandler = (data)=>{
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
        
    }

    putAPI = ()=>{
        axios.put(`https://my-json-server.typicode.com/fachri-amin/fake-api/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost)
        .then((res)=>{
            alert('Post was updated');
            this.setState({
                formBlogPost:{
                    id: 1,
                    title: "",
                    body: "",
                    userId: 1
                },
                isUpdate: false
            });
        }, (err)=>alert(err));
    }

    render(){
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
                        return <Post key={post.id} data={post} remove={(id)=>this.deleteHandler(id)} update={(data)=>this.updateHandler(data)} />
                        {/* props key harus ada agar setiap component punya keunikan, jika tidak maka akan ada warning */}
                    })
                }

            </Fragment>
        )
    }
}

export default BlogPost;