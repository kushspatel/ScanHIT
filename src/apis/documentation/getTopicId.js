import getAxiosInstance from '../getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const getTopicId = async (nodeId) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['asset']));
    return instance.get(`/documentation/parent/${nodeId}`);
};

export default getTopicId;
