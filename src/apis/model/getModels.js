import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for chatting
const getModels = async () => {

    const instance = getAxiosInstance(getApiBase(serviceNames['modelservice']));

    return instance.get('/models/config-models');
};

export default getModels;
