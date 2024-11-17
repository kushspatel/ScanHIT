import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for get all session
const updateSession = async (sessionId, assetIds = null, sessionName = null, sessionFavorite = null, session_name_autogenerated = false) => {

    if(!sessionId) {
        return Promise.reject({
            error: true,
            message: 'sessionId mandatory in updateSession function',
        });
    }
    const instance = getAxiosInstance(getApiBase(serviceNames['chat']));

    return instance.put(`/sessions/${sessionId}`,{
        'context_asset_ids': assetIds,
        'session_name': sessionName ?? null,
        'session_favorite': sessionFavorite ?? null,
        'session_name_autogenerated': session_name_autogenerated,
    });
};

export default updateSession;