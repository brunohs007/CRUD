import axios from "axios";
//axios faz a requicisoes da api via http

export default () => axios.create({
    baseURL: 'http://localhost:3000/api',
});