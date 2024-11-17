import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const getDirStructure = () => {
    const instance = getAxiosInstance(getApiBase(serviceNames['asset']));
    return instance.get('/directories');
};

export default getDirStructure;
