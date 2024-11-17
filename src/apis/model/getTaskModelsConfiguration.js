import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for chatting
const getTaskModelsConfiguration = async () => {
    const instance = getAxiosInstance(getApiBase(serviceNames['chat']));
    return instance.get('/models/tasks/configuration');
};

export default getTaskModelsConfiguration;
