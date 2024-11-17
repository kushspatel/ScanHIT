import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for user signup
const userSignup = async (token) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['auth']));
    return instance.post('/usersignup', {
        'token': token,
    });
};

export default userSignup;
