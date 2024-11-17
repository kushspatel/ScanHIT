import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API Call for getCollaboration
const getCollaboration = async (owner_id, sessionId) => {
    if (!sessionId) {
        return Promise.reject({
            error: true,
            message: 'SessionId mandatory in getcollaboration function',
        });
    }
    const instance = getAxiosInstance(getApiBase(serviceNames['chat']));

    return instance.get('/collaboration', {
        params: {
            collaboration_owner_id: owner_id,
            collaborated_session_id: sessionId,
        },
    });
};

export default getCollaboration;
