import axios from 'axios';
import { URL_API } from '../../helpers/config';
import { updateCreditSchema } from '../../models/credit';

export default async (id: string, credit: updateCreditSchema) => {
    return axios.patch(`${URL_API}/credits/${id}`, credit);
}