import axios from 'axios';

const DefaultAPI = 'https://my-json-server.typicode.com/fachri-amin/fake-api/';

const Get = (path, url_api = DefaultAPI) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${url_api}${path}`)
            .then((result) => {
                resolve(result.data);
            }, (err) => {
                reject(err);
            });
    })

    return promise;
}

const getLatestBlog = () => Get('posts?_sort=id&_order=desc');
const getUser = () => Get('users', 'https://jsonplaceholder.typicode.com/');

const API = {
    getLatestBlog,
    getUser
}

export default API;