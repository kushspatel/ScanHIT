import getAxiosInstance from '../getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const updateDocNodeContent = async (node_id, request) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['asset']));
    return instance.put(`/documentation/content/${node_id}`, request);
};

export default updateDocNodeContent;
