import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for chatting
const getPromptTemplateMetdata = async (prompt_id) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['chat']));

    return instance.get(`/user_prompts/${prompt_id}`);
};

export default getPromptTemplateMetdata;
