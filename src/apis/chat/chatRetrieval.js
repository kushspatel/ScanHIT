import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for user session chat retrieval
const chatRetrieval = async (chatObject) => {

    if(!chatObject) {
        return Promise.reject({
            error: true,
            message: 'chatObject mandatory in chatRetrieval function',
        });
    }
    const instance = getAxiosInstance(getApiBase(serviceNames['chat']));

    return instance.post('/chat/users',chatObject);
};

export default chatRetrieval;
