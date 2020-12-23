import Get from './Get';
import Post from './Post';
import Put from './Put';
import Delete from './Delete';

//Post
const postNewBlog = (data) => Post('posts', data);

//Put
const updateBlog = (data, id) => Put(`posts/${id}`, data);

//Delete
const deleteBlog = (id) => Delete(`posts/${id}`);

//Get
const getLatestBlog = () => Get('posts?_sort=id&_order=desc');
const getUser = () => Get('users', 'https://jsonplaceholder.typicode.com/');

const API = {
    deleteBlog,
    updateBlog,
    postNewBlog,
    getLatestBlog,
    getUser
}

export default API;