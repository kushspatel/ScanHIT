import axios from 'axios';

const getYoutubeLinkTitle = ({url}) => {
    if (!url || typeof url !== 'string') {
        return Promise.reject({
            error: true,
            message: 'url is mandatory and must be a string',
        });
    }

    const instance = axios.create();
    return instance.get('https://www.youtube.com/oembed', {
        params: {
            format: 'json',
            url,
        },
        timeout: 3000,
    });
};

export default getYoutubeLinkTitle;
