import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';


const getMessageById = async (chatMessageRequest) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['chat']));
    return instance.post('/chat/users/message',chatMessageRequest);
};

export default getMessageById;
