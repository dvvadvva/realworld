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

const getHeaderForReq =()=>{
    let jwt = localStorage.getItem('jwt');
    let res = {};
    if (jwt){ res={...res, headers: {Authorization: `Token ${jwt}`}}};
    return res
}

export const articles = {

    list: (limit = 10, offset = 0) => {
        return axios.get(`https://conduit.productionready.io/api/articles?limit=${limit}&offset=${offset}`, getHeaderForReq())
    },
    article: (slug)=>{
        return axios.get(`https://conduit.productionready.io/api/articles/${slug}`)
    },

    favor: (slug)=>{
        return axios.post(`https://conduit.productionready.io/api/articles/${slug}/favorite`,'', getHeaderForReq())
    },

    unfavor: (slug)=>{
        return axios.delete(`https://conduit.productionready.io/api/articles/${slug}/favorite`, getHeaderForReq())
    }

}

export const tags = {

    listTags: () => {
        return axios.get(`https://conduit.productionready.io/api/tags`)
    }
}