import axios from 'axios';
import { DefaultAPI } from './Config';

const Post = (path, data, url_api = DefaultAPI) => {
    const promise = new Promise((resolve, reject) => {
        axios.post(`${url_api}${path}`, data)
            .then((result) => {
                resolve(result);
            }, (err) => {
                reject(err);
            });
    })

    return promise;
}

export default Post;