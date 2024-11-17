import getAxiosInstance from '../getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const createDocNodeMapping = async (request) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['asset']));
    return instance.post('/documentation/mapping', request);
};

export default createDocNodeMapping;
