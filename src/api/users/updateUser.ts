import axios from 'axios';
import { URL_API } from '../../helpers/config';
import { UserData } from '../../models/user';

export default async (id: number, data: UserData) => {
    return axios.patch(`${URL_API}/users/${id}`, data);
}