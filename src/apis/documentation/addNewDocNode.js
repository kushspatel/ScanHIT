import getAxiosInstance from '../getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const addNewDocNode = async (request) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['asset']));
    return instance.post('/documentation', request);
};

export default addNewDocNode;
