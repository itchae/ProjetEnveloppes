import axios from "axios";
import { buildEspeces } from '../utils/guichetUtils';

export const retirerBillets = (nbOfFive, nbOfTen, nbOfTwenty, nbOfFifty) => {
    const req = buildEspeces(nbOfFive, nbOfTen, nbOfTwenty, nbOfFifty);
    console.log("req", req);
    return axios.post('http://127.0.0.1:3000/guichet/', req).then(res => console.log(res));
}

export const getGuichet = () => {
    return axios.get('http://127.0.0.1:3000/guichet/').then(res => console.log(res));
}

export const getGuichetTotal = () => {
    return axios.get('http://127.0.0.1:3000/guichet/total').then(res => res.data);
}