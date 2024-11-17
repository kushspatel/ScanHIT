import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

//API call for getting all jobs details
const getAllJob = async () => {

    const instance = getAxiosInstance(getApiBase(serviceNames['builder']));
    return instance.get('/jobs/details');
};

export default getAllJob;
