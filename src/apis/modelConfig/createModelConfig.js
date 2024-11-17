import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for creating model config
const createModelConfig = async (data) => {

    const instance = getAxiosInstance(getApiBase(serviceNames['chat']));
    return instance.post('/models/tasks', data);
};

export default createModelConfig;
