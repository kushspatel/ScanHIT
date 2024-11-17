import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for chatting
const deletePromptTemplate = async (promptId) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['chat']));
    return instance.delete(`/user_prompts/${promptId}`);
};

export default deletePromptTemplate;
