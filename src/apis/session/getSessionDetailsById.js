import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for get all session
const getSessionDetailsById = async (sessionId) => {
    if(!sessionId) {
        return Promise.reject({
            error: true,
            message: 'sessionId mandatory in getSessionAssets function',
        });
    }

    const instance = getAxiosInstance(getApiBase(serviceNames['chat']));

    return instance.get(`/sessions/${sessionId}`);
};

export default getSessionDetailsById;
