import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call to generate session name using AI
const generateSessionName = async (sessionId, forceAutoGenerate) => {

    if(!sessionId) {
        return Promise.reject({
            error: true,
            message: 'sessionId mandatory in generate session name function',
        });
    }
    const instance = getAxiosInstance(getApiBase(serviceNames['chat']));

    return instance.post('/sessions/name', {
        'session_id': sessionId,
        'force_autogenerate': forceAutoGenerate,
    });
};

export default generateSessionName;
