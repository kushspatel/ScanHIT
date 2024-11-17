import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call to get workspace groups via a POST request
const putWorkspace = async (workspaceName, workspace_id) => {
    if (!workspaceName || !workspace_id) {
        return Promise.reject({
            error: true,
            message: 'workspaceName mandatory in getWorkspaceGroups function',
        });
    }

    const instance = getAxiosInstance(getApiBase(serviceNames['chat']));
    const data = {
        work_space_name: workspaceName,
    };

    return instance.put(`/workspace/groups/${workspace_id}`, data);
};

export default putWorkspace;
