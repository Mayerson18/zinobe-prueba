import axios from 'axios';
import { URL_API } from '../../helpers/config';
import { CreditData } from '../../models/credit';

export default async (userId: number) => {
    return axios.get(`${URL_API}/credits?status=true&userId=${userId}&statusPayCredit=true`);
}