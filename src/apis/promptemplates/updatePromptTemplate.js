import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for chatting
const updatePromptTemplate = async (promptId, promptObject) => {

    if(!promptObject || !promptId) {
        return Promise.reject({
            error: true,
            message: 'promptObject and promptId mandatory',
        });
    }
    const instance = getAxiosInstance(getApiBase(serviceNames['chat']));

    return instance.put(`/user_prompts/${promptId}`,promptObject);
};

export default updatePromptTemplate;
