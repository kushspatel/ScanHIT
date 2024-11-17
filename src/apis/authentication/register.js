import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for register with default password generation
const register = async (args) => {
    const { email, firstName, lastName } = args;

    if (!email) {
        return Promise.reject({
            error: true,
            message: 'Email is mandatory in the register function',
        });
    }

    // Generate default password if not provided
    const defaultPassword = `${firstName}${lastName}@123`;
    const password = args.password || defaultPassword;

    const instance = getAxiosInstance(getApiBase(serviceNames['auth']));

    const params = {
        firstName,
        lastName,
        email,
        password,
    };

    return instance.post('/register', params);
};

export default register;
