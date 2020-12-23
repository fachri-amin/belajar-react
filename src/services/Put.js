import axios from 'axios';
import { DefaultAPI } from './Config';

const Put = (path, data, url_api = DefaultAPI) => {
    const promise = new Promise((resolve, reject) => {
        axios.put(`${url_api}${path}`, data)
            .then((result) => {
                resolve(result);
            }, (err) => {
                reject(err);
            });
    })

    return promise;
}

export default Put;