import config from './config';

const APIService ={
    getPets() {
        return fetch(`${config.REACT_APP_API_BASE}/pets`)
        .then(res => 
            (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json())
    },
    getPeople() {
        return fetch(`${config.REACT_APP_API_BASE}/people`)
        .then(res => 
            (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json())
    }
}

export default APIService