import axios from 'axios';
import { DefaultAPI } from './Config';

const Delete = (path, url_api = DefaultAPI) => {
    const promise = new Promise((resolve, reject) => {
        axios.delete(`${url_api}${path}`)
            .then((result) => {
                resolve(result);
            }, (err) => {
                reject(err);
            });
    })

    return promise;
}

export default Delete;