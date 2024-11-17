import getAxiosInstance from '../getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const getDocNodeContent = async (node_id) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['asset']));
    return instance.get(`/documentation/content/${node_id}`);
};

export default getDocNodeContent;
