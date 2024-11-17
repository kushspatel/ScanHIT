import getAxiosInstance from '../getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for summary
const summary = async (summaryObject) => {

    if (!summaryObject) {
        return Promise.reject({
            error: true,
            message: 'summaryObject mandatory in summary function',
        });
    }
    const instance = getAxiosInstance(getApiBase(serviceNames['asset']));

    return instance.post('/summary', summaryObject);
};

export default summary;
