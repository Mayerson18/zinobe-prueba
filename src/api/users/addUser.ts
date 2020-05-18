import axios from 'axios';
import { URL_API } from '../../helpers/config';
import { UserData } from '../../models/user';

export default async (user: UserData) => {
    return axios.post(`${URL_API}/users`, user);
}