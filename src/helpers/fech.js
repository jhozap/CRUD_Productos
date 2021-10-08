const baseUrl = process.env.React_App_API_Url;

const fetchSinToken = (endpoint, data, method = 'GET') => {

    const url = `${ baseUrl }/${ endpoint }`;

    if(method === 'GET') {
        return fetch(url);
    } else {
        fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }

}

export {
    fetchSinToken
}