import axios from 'axios';
import { URL_API } from '../../helpers/config';

export default async (status: boolean) => {
    return axios.get(`${URL_API}/credits?status=${status}&_expand=user`);
}