import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for getting chat history of a specific project
const getChatHistory = async (projectId) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['chat']));

    return instance.get(`/project/latex/${projectId}`);
};

export default getChatHistory;
