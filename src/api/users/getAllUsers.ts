import axios from 'axios';
import { URL_API } from '../../helpers/config';

export default async () => {
    axios.get(`${URL_API}/users`)
}