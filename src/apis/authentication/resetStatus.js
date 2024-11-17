import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for resetStatus
const resetStatus = async (email, password) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['auth']));
    return instance.post('/resetStatus', {
        'email': email,
        'password': password,
    });
};

export default resetStatus;
