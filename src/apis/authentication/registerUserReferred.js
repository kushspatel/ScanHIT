import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for register with default password generation
const registerUserReferred = async (args) => {
    const {
        email,
        firstName,
        lastName,
        referralId,
        tpa,
        tpaType,
        tpaData,
    } = args;

    if (tpa) {
        if (!tpaType || !tpaData) {
            return Promise.reject({
                error: true,
                message: 'TPA type and data are mandatory when TPA is provided',
            });
        }
    } else if (!email) {
        return Promise.reject({
            error: true,
            message: 'Email is mandatory in the register function',
        });
    }

    const instance = getAxiosInstance(getApiBase(serviceNames['auth']));

    const params = {
        firstName,
        lastName,
        email,
        referralId,
        tpa,
        tpaType,
        tpaData,
    };

    return instance.post('/register/referred', params);
};

export default registerUserReferred;
