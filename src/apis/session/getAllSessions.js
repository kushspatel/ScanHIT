import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for get all session
const getAllSessions = async (localStorageValueId) => {

    const instance = getAxiosInstance(getApiBase(serviceNames['chat']));

    const data = {
        workspace_id: localStorageValueId,
    };

    return instance.post('/sessions/users', data);
};

export default getAllSessions;
