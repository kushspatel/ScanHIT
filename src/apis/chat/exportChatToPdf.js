import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const exportChatToPdf = async (username, session_id, split_id) => {;

    if (!username || !session_id || !split_id) {
        return Promise.reject({
            error: true,
            message: 'username, session id and split id are mandatory in exportChatToPdf function',
        });
    }

    const instance = getAxiosInstance(getApiBase(serviceNames['chat']));

    // Create json for username and session_id
    const data = {
        username: username,
        session_id: session_id,
        split_id: split_id,
    };

    // Setting response type to blob to handle binary data
    const response = await instance.post('/export_chat_pdf', data, { responseType: 'blob' });
    return response;
};

export default exportChatToPdf;
