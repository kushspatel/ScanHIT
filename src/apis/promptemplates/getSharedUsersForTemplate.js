import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for chatting
const getSharedUsersForTemplate = async (promptId) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['chat']));

    return instance.get(`/user_prompts/share/${promptId}`);
};

export default getSharedUsersForTemplate;
