import getAxiosInstance from '../getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const getAllDocNodesById = async (node_id) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['asset']));
    return instance.get(`documentation/${node_id}`);
};

export default getAllDocNodesById;
