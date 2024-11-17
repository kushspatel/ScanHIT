import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for chatting
const chat = async (chatObject) => {

    if(!chatObject) {
        return Promise.reject({
            error: true,
            message: 'chatObject mandatory in Chat function',
        });
    }
    const instance = getAxiosInstance(getApiBase(serviceNames['chat']));

    return instance.post('/chat',chatObject);
};

export default chat;
