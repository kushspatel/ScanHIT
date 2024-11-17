import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for get all chat modal
const getChatModels = async () => {

    const instance = getAxiosInstance(getApiBase(serviceNames['chat']));

    return instance.get('/models');
};

export default getChatModels;
