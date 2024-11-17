import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for chatting
const savePromptTemplate = async (promptObject) => {

    if(!promptObject) {
        return Promise.reject({
            error: true,
            message: 'promptObject mandatory',
        });
    }
    const instance = getAxiosInstance(getApiBase(serviceNames['chat']));

    return instance.post('/user_prompts',promptObject);
};

export default savePromptTemplate;
