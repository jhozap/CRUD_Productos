import axios from 'axios';
import { constants } from '../util/constants';
export const listarProductos = async (token) => {    

    try {
        return await axios({
            method: 'GET',
            url: `${process.env.React_App_API_Url}${constants.listarProductos}`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    } catch (error) {
        throw new Error(error);
    }
}