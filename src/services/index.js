import Get from './Get';
import Post from './Post';

//Post
const postNewBlog = (data) => Post('posts', data);

//Get
const getLatestBlog = () => Get('posts?_sort=id&_order=desc');
const getUser = () => Get('users', 'https://jsonplaceholder.typicode.com/');

const API = {
    postNewBlog,
    getLatestBlog,
    getUser
}

export default API;