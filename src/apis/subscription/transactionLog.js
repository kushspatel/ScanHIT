import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// save transaction log
const transactionLog = async (data) => {
    if (!data) {
        return Promise.reject({
            error: true,
            message: 'data is mandatory for saving transaction log',
        });
    }

    const instance = getAxiosInstance(getApiBase(serviceNames['subscription']));
    return instance.post('/transaction-log', data);
};

export default transactionLog;
