import * as axios from 'axios';
import Cookie from 'js-cookie';

const instance = axios.create({
    baseURL: 'http://185.146.3.44/',
});

instance.interceptors.request.use(req => {
    if (Cookie.get('access')) {
        req.headers['Authorization'] = `JWT ${Cookie.get('access')}`;
        req.headers['Content-Type'] = 'application/json';
        return req;
    }
    else {
        req.headers['Content-Type'] = 'application/json';
        return req;
    }
});



export const authAPI = {
    login(email, password) {
        const body = JSON.stringify({ email, password });
        return instance.post(`api/v1/auth/jwt/create`, body).then(response => {
            console.log(response.data);
            return response.data;
        })
    },

    loadUser() {
        return instance.get('api/v1/auth/users/me/').then(response => {
            return response.data;
        })
    },

    signup(email, first_name, last_name, password, re_password) {
        
        const body = JSON.stringify({ email, first_name, last_name, password, re_password })
        console.log(body);
        return instance.post(`api/v1/auth/users/`, body).then(response => {
            return response.data;
        })
    }
    
}


