import getAxiosInstance from '../getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for short session summary
const shortSessionSummary = async (sessionSummaryObject) => {

    if (!sessionSummaryObject) {
        return Promise.reject({
            error: true,
            message: 'sessionSummaryObject mandatory to get session summary',
        });
    }
    const instance = getAxiosInstance(getApiBase(serviceNames['chat']));

    return instance.post('/sessions/summary', sessionSummaryObject);
};

export default shortSessionSummary;
