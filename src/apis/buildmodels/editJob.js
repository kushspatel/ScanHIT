import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const editJob = async (jobData, jobId) => {

    if(!jobData) {
        return Promise.reject({
            error: true,
            message: 'jobData mandatory for editing',
        });
    }

    const instance = getAxiosInstance(getApiBase(serviceNames['builder']));
    return instance.put(`/jobs/${jobId}`, jobData);
};

export default editJob;
