import getAxiosInstance from '../getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const getDocNodeTree = async (node_id) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['asset']));
    return instance.get(`/documentation/tree/${node_id}`);
};

export default getDocNodeTree;
