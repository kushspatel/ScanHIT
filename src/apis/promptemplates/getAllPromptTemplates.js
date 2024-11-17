import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for chatting
const getAllPromptTemplates = async () => {
    const instance = getAxiosInstance(getApiBase(serviceNames['chat']));

    return instance.get('/user_prompts');
};

export default getAllPromptTemplates;
