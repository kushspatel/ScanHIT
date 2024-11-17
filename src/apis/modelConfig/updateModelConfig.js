import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for creating model config
const updateModelConfig = async (config_id, data) => {
    if (!config_id) {
        throw new Error('config_id is required');
    }

    const instance = getAxiosInstance(getApiBase(serviceNames['chat']));
    return instance.put(`/models/tasks?config_id=${config_id}`, data);
};

export default updateModelConfig;
