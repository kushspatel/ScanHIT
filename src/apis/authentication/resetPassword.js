import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for resetPassword
const resetPassword = async (password, temporaryToken) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['auth']));
    return instance.post('/resetPassword', {
        'password': password,
        'token': temporaryToken,
    });
};

export default resetPassword;
