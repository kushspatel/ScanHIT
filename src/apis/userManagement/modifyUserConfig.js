import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API Call for getting default model
const modifyUserConfig = async (configuration) => {
    const instance = getAxiosInstance(getApiBase(serviceNames.auth));

    return instance.post('/users/config', {
        configuration: configuration,
    });

};

export default modifyUserConfig;
