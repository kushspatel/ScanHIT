import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for get all session
const searchSessions = async (query, workspace_id) => {

    if (!query) {
        return Promise.reject({
            error: true,
            message: 'Need to enter a query to get results',
        });
    }

    const instance = getAxiosInstance(getApiBase(serviceNames['chat']));

    return instance.post('/sessions/search', {
        query: query,
        workspace_id: workspace_id,
    });
};

export default searchSessions;
