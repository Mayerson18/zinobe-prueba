import axios from 'axios';
import { URL_API } from '../../helpers/config';

export default async (document: string) => {
    return axios.get(`${URL_API}/users?document=${document}`)
}