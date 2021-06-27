import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.elcoma.com.br/api/visits'
})