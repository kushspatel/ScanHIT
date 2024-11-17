import getAxiosInstance from '../getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const updateDocNode = async (node_id, request) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['asset']));
    return instance.put(`documentation/${node_id}`, request);
};

export default updateDocNode;
