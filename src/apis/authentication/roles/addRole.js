import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const addRole = async (request) => {
    const instance = getAxiosInstance(getApiBase(serviceNames.auth));
    return instance.post('/roles', request);
};

export default addRole;
