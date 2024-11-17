import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const getWorkspacePrompt = async (workspaceId) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['chat']));
    return instance.get(`/workspace-prompt/${workspaceId}`);
};

export default getWorkspacePrompt;
