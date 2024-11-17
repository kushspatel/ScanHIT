import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for chatting
const getBaseFamily = async () => {

    const instance = getAxiosInstance(getApiBase(serviceNames['modelservice']));

    return instance.get('/models/model-families');
};

export default getBaseFamily;
