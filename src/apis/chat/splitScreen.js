import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for split screen
const splitScreen = async (chatObject) => {

    if(!chatObject) {
        return Promise.reject({
            error: true,
            message: 'chatObject mandatory in splitScreen function',
        });
    }
    const instance = getAxiosInstance(getApiBase(serviceNames['chat']));

    return instance.post('/sessions/split',chatObject);
};

export default splitScreen;
