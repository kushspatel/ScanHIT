import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call to get workspace groups via a POST request
const postWorkspace = async (workspaceName) => {
    if (!workspaceName) {
        return Promise.reject({
            error: true,
            message: 'workspaceName mandatory in getWorkspaceGroups function',
        });
    }

    const instance = getAxiosInstance(getApiBase(serviceNames['chat']));
    const data = {
        work_space_name: workspaceName,
    };

    return instance.post('/workspace/groups', data);
};

export default postWorkspace;
