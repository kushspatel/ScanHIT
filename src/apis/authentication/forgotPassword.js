import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for forgotPassword
const forgotPassword = async (email) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['auth']));
    return instance.post('/forgotPassword', {
        'email': email,
    });
};

export default forgotPassword;
