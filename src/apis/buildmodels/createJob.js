import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for creating job
const createJob = async (job) => {
    if(!job) {
        return Promise.reject({
            error: true,
            message: 'job mandatory for creating',
        });
    }
    const instance = getAxiosInstance(getApiBase(serviceNames['builder']));
    return instance.post('/jobs', job);
};

export default createJob;
