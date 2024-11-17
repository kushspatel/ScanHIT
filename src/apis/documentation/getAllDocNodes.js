import getAxiosInstance from '../getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const getAllDocNodes = async () => {
    const instance = getAxiosInstance(getApiBase(serviceNames['asset']));
    return instance.get('/documentation');
};

export default getAllDocNodes;
