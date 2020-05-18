import axios from 'axios';
import { URL_API } from '../../helpers/config';

export default async (userId: number) => {
    return axios.get(`${URL_API}/credits?userId=${userId}&statusPayCredit=false`);
}