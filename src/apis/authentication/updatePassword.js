import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for logout
const updatePassword = async (username, currentPassword, newPassword) => {

    const instance = getAxiosInstance(getApiBase(serviceNames['auth']));
    return instance.put('/updatePassword', {
        'email': username,
        'currentPassword': currentPassword,
        'newPassword': newPassword,
    });
};

export default updatePassword;
