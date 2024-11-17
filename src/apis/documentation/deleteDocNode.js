import getAxiosInstance from '../getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const deleteDocNode = async (node_id) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['asset']));
    return instance.delete(`documentation/${node_id}`);
};

export default deleteDocNode;
