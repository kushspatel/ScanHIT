import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for login
const login = async (args) => {

    const { email, password, tpa, tpaType, tpaData } = args;

    if (tpa) {
        if (!tpaType || !tpaData) {
            return Promise.reject({
                error: true,
                message: 'TPA type and data are mandatory when TPA is provided',
            });
        }
    } else if(!email) {
        return Promise.reject({
            error: true,
            message: 'email mandatory in login function',
        });

    } else if(!password) {
        return Promise.reject({
            error: true,
            message: 'password mandatory in login function',
        });
    }

    const instance = getAxiosInstance(getApiBase(serviceNames['auth']));

    const params = {
        'email' : email,
        'password' : password,
        'tpa' : tpa,
        'tpaType' : tpaType,
        'tpaData' : tpaData,
    };

    return instance.post('/login' , params);
};

export default login;
