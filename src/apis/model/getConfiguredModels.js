import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for chatting
const getConfiguredModels = async () => {

    const instance = getAxiosInstance(getApiBase(serviceNames['modelservice']));

    return instance.get('/models/model-information');
};

export default getConfiguredModels;
