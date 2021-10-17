import axios from 'axios';
export const loginGoogle = async ({ tokenId }) => {
    try {
        return await axios({
            method: 'POST',
            url: `${process.env.React_App_API_Url}/auth/google/login`,
            headers: {
                'Authorization': `Bearer ${tokenId}`
            }
        });
    } catch (error) {
        throw new Error(error);
    }
}


