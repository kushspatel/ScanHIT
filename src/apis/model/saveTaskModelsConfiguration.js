import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for chatting
const saveTaskModelsConfiguration = async (configurationRequest) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['chat']));
    return instance.post('/models/tasks/configuration', configurationRequest);
};

export default saveTaskModelsConfiguration;
