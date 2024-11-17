import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API Call for getting default model
const getUserConfig = async (token) => {
    const instance = getAxiosInstance(getApiBase(serviceNames.auth));
    return instance.get('/users/config', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export default getUserConfig;
