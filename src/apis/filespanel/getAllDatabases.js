import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const  getAllDatabases = async () => {
    const instance = getAxiosInstance(getApiBase(serviceNames['asset']));
    return instance.get('/database_integration');
};

export default getAllDatabases;
