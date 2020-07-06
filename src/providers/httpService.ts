import Axios from 'axios';
import storageService from "@/providers/storageService";


function request(method: any, url: string, data: any, headers: any = {}): Promise<any> {
    headers['authorization'] = storageService.getAuthorization();
    const promise = new Promise<any>(resolve => {
        Axios.request({
            method, url, data, baseURL: 'https://localhost:5001/api/v1',
            headers
        }).then(req => {
            resolve(req);
        }).catch(err => {
            throw err;
        })
    });
    return promise;
}

const httpService = {
    get: function (url: string): Promise<any> {
        return request('get', url, {});
    },
    post: function (url: string, data: any): Promise<any> {
        const headers = {'Content-Type': 'application/json'};
        return request('post', url, data, headers);
    }

}



export default httpService;