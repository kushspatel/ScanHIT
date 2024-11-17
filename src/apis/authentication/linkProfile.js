import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for login
const linkProfile = async (args) => {
    const { email, tpa, tpaType, tpaData } = args;

    if (!tpa || !email || !tpaType || !tpaData) {
        return Promise.reject({
            error: true,
            message: 'TPA type, data, email are mandatory for profile linkage',
        });
    };

    const instance = getAxiosInstance(getApiBase(serviceNames['auth']));

    const params = {
        'email' : email,
        'tpa' : tpa,
        'tpaType' : tpaType,
        'tpaData' : tpaData,
    };

    return instance.post('/login/link' , params);
};

export default linkProfile;
