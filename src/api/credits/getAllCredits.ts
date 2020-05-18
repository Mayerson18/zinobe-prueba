import axios from 'axios';
import { URL_API } from '../../helpers/config';

export default async () => {
    return axios.get(`${URL_API}/credits`);
}