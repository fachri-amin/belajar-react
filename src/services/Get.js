import axios from 'axios';
import { DefaultAPI } from './Config';

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

export default Get;