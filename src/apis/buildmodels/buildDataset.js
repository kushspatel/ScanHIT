import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

//API call for getting all jobs details
const buildDataset = async (jobId) => {

    if(!jobId) {
        return Promise.reject({
            error: true,
            message: 'jobId mandatory for creating',
        });
    }

    const data = {
        'job_id': jobId,
    };

    const instance = getAxiosInstance(getApiBase(serviceNames['builder']));
    return instance.post('/jobs/build-dataset', data);
};

export default buildDataset;
