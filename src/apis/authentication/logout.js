import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for logout
const logout = async () => {

    const instance = getAxiosInstance(getApiBase(serviceNames['auth']));
    return instance.post('/logout');
};

export default logout;
