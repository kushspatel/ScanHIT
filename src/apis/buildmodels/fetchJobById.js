import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const fetchJobById = async (jobId) => {
    if(!jobId) {
        return Promise.reject({
            error: true,
            message: 'jobId mandatory for fetching',
        });
    }
    const instance = getAxiosInstance(getApiBase(serviceNames['builder']));
    return instance.get(`/jobs/${jobId}`);
};

export default fetchJobById;
