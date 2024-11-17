import getAxiosInstance from '../getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for summary
const sessionSummary = async (sessionSummaryObject) => {

    if (!sessionSummaryObject) {
        return Promise.reject({
            error: true,
            message: 'sessionSummaryObject mandatory to get session summary',
        });
    }
    const instance = getAxiosInstance(getApiBase(serviceNames['vector']));

    return instance.post('/query/session_summary/exists', sessionSummaryObject);
};

export default sessionSummary;
