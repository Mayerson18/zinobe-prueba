import axios from 'axios';
import { URL_API } from '../../helpers/config';
import { CreditData } from '../../models/credit';

export default async (credit: CreditData) => {
    return axios.post(`${URL_API}/credits`, credit);
}