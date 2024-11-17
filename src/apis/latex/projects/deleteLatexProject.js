import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const deleteLatexProject = async (projectId) => {
    if (!projectId) {
        return Promise.reject({
            error: true,
            message: 'projectId is mandatory in deleteLatexProject function',
        });
    }

    const instance = getAxiosInstance(getApiBase(serviceNames['asset']));

    return instance.delete(`/project_latex/${projectId}`);
};

export default deleteLatexProject;
