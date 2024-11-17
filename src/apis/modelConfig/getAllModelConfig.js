import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for getting model config
const getAllModelConfig = async () => {

    const instance = getAxiosInstance(getApiBase(serviceNames['chat']));

    return instance.get('/models/tasks');
};

export default getAllModelConfig;
