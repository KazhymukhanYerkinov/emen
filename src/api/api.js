import * as axios from 'axios';
import Cookie from 'js-cookie';

const instance = axios.create({
    baseURL: 'https://e-men.kz/',
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
            return response.data;
        })
    },

    loadUser() {
        return instance.get('api/v1/auth/users/me/').then(response => {
            return response.data;
        })
    },
    resetEmail(email) {
        const body = JSON.stringify({ email });
        return instance.post('api/v1/auth/users/reset_password/', body).then(response => {
            return response.data;
        })
    },
    resetPassword(uid, token, new_password, re_new_password) {
        const body = JSON.stringify({ uid, token, new_password, re_new_password });
        return instance.post('api/v1/auth/users/reset_password_confirm/', body).then(response => {
            return response.data;
        })
    },
    signup(email, first_name, last_name, password, re_password) {      
        const body = JSON.stringify({ email, first_name, last_name, password, re_password })
        return instance.post(`api/v1/auth/users/`, body).then(response => {
            return response.data;
        })
    },
    activateAccount(uid, token) {
        const body = JSON.stringify({ uid, token });

        return instance.post(`api/v1/auth/users/activation/`, body).then(response => {
            return response;
        })
    }
    
}



export const subjectAPI = {
    getSubjects() {
        return instance.get('api/v1/subjects/list/grouped/').then(response => {
            return response.data;
        })
    },
    getDetail(subject) {
        return instance.get(`api/v1/subjects/${subject}/categories/grouped-by/topics/`).then(response => {
            return response.data;
        })
    }
}

export const startTestAPI = {
    postStartTest(exam_type, subject, with_hint, difficulty, topic_id, profile_subject_1, profile_subject_2) {
        let body;
        if (profile_subject_1 && profile_subject_2) {
            body = JSON.stringify({
                exam_type,
                with_hint,
                profile_subject_1,
                profile_subject_2,
                difficulty
            })
        }
        else if (topic_id) {
            body = JSON.stringify({ 
                exam_type, 
                subject,
                with_hint, 
                difficulty, 
                topic_id
            }); 
        }
        else {
            body = JSON.stringify({ 
                exam_type, 
                subject,
                with_hint, 
                difficulty 
            });
        }
        return instance.post(`api/v1/examinations/start/`, body).then(response => {
            
            return response.data;
        })
    },

    getQuestion(uid) {
        return instance.get(`api/v1/examinations/${uid}/`).then(response => {
            return response.data
        })
    },

    saveQuestion(examUID, left_seconds, is_paused, student_answers) {
        let body = JSON.stringify({
            left_seconds,
            is_paused,
            student_answers,
        })


        return instance.post(`api/v1/examinations/${examUID}/save-state/`, body).then(response => {
            return response;
        })
    },

    finishQuestion(examUID, left_seconds, is_paused, student_answers) {
        let body = JSON.stringify({
            left_seconds,
            is_paused,
            student_answers,
        });

        return instance.post(`api/v1/examinations/${examUID}/finish/`, body).then(response => {
            return response;
        })
    }
} 


