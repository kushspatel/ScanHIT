import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';
// API call for delete user session
const deleteSessions = async (sessionIds) => {
    if (!sessionIds) {
        return Promise.reject({
            error: true,
            message: 'SessionId mandatory in deleteSession function',
        });
    }
    const instance = getAxiosInstance(getApiBase(serviceNames['chat']));

    return instance.delete('/sessions/users', {
        data: {
            'session_ids': sessionIds,
        },
    });
};

export default deleteSessions;
