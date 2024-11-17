import getAxiosInstance from '../getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const getAllDocNodesByType = async (type) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['asset']));
    return instance.get(`/documentation/type/${type}`);
};

export default getAllDocNodesByType;
