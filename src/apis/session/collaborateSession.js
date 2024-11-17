import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API Call for collaboration
const collaborateSession = async (owner_id, sessionId, user_ids) => {
    if (!sessionId) {
        return Promise.reject({
            error: true,
            message: 'SessionId mandatory in collaborateSession function',
        });
    }
    const instance = getAxiosInstance(getApiBase(serviceNames['chat']));

    return instance.put('/collaboration', {
        'collaboration_owner_id': owner_id, // This is the user id of the owner of the session
        'collaborated_session_id': sessionId,
        'shared_user_id': user_ids,
    });
};

export default collaborateSession;
