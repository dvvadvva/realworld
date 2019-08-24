import axios from 'axios';

export const auth = {
    login: (username, password) => {
        return axios.post('https://conduit.productionready.io/api/users/login', {
            "user": { "email": username, "password": password }
        })
    },

    req: () => {
        let jwt = localStorage.getItem('jwt');
        return axios.get('https://conduit.productionready.io/api/user',
            { headers: { Authorization: `Token ${jwt}` } }
        )
    },

    articles: (limit = 10, offset = 0) => {
        let jwt = localStorage.getItem('jwt');
        return axios.get(`'https://conduit.productionready.io/api/articles?limit${limit}offset=${offset}`,
            { headers: { Authorization: `Token ${jwt}` } }
        )
    }
}

export const articles = {

    list: (limit = 10, offset = 0) => {
        let jwt = localStorage.getItem('jwt');
        return axios.get(`https://conduit.productionready.io/api/articles?limit=${limit}&offset=${offset}`,
            { headers: { Authorization: `Token ${jwt}` } }
        )
    },
    article: (slug)=>{
        return axios.get(`https://conduit.productionready.io/api/articles/${slug}`)
    }

}

export const tags = {

    listTags: () => {
        return axios.get(`https://conduit.productionready.io/api/tags`)
    }
}