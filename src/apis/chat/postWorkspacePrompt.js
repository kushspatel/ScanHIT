import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call to get workspace groups via a POST request
const postWorkspacePrompt = async (workspaceId, workspacePrompt) => {
    if (!workspaceId) {
        return Promise.reject({
            error: true,
            message: 'workspaceId mandatory in postWorkspacePrompt function',
        });
    }

    const instance = getAxiosInstance(getApiBase(serviceNames['chat']));
    const data = {
        workspace_id: workspaceId,
        prompt: workspacePrompt,
    };

    return instance.post('/workspace-prompt', data);
};

export default postWorkspacePrompt;
