import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for creating model config
const deleteModelConfig = async (config_id) => {
    if (!config_id) {
        throw new Error('config_id is required');
    }

    const instance = getAxiosInstance(getApiBase(serviceNames['chat']));
    return instance.delete(`/models/tasks?config_id=${config_id}`);
};

export default deleteModelConfig;
