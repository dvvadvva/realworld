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
    }
}