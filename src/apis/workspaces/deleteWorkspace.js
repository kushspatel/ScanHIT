import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call to get workspace groups via a POST request
const deleteWorkspace = async (workspaceId) => {
    if (!workspaceId) {
        return Promise.reject({
            error: true,
            message: 'workspaceName mandatory in deleteWorkspace',
        });
    }

    const instance = getAxiosInstance(getApiBase(serviceNames['chat']));
    return instance.delete(`/workspace/groups/${workspaceId}`);
};
export default deleteWorkspace;
