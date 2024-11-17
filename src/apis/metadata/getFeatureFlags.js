
import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for get userDetails
const getFeatureFlags = async () => {
    const instance = getAxiosInstance(getApiBase(serviceNames['auth']));
    return instance.get('/features');
};

export default getFeatureFlags;
