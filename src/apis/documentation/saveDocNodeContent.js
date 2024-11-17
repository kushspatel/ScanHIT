import getAxiosInstance from '../getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const saveDocNodeContent = async (node_id, request) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['asset']));
    return instance.post(`/documentation/content/${node_id}`, request);
};

export default saveDocNodeContent;
