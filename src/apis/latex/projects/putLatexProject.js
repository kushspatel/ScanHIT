import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const putLatexProject = async (projectId, projectData, file) => {
    if (!projectId || !projectData || !file) {
        return Promise.reject({
            error: true,
            message: 'projectId, projectData, and file are mandatory in putLatexProject function',
        });
    }

    try {
        const instance = getAxiosInstance(getApiBase(serviceNames['asset']));

        const formData = new FormData();
        formData.append('data', JSON.stringify(projectData));
        formData.append(projectData.latex_key, file);

        const response = await instance.put(`/project_latex/${projectId}`, formData);

        return response;
    } catch (error) {
        console.error('Error in putLatexProject:', error.response || error.message || error);
        return Promise.reject(error);
    }
};

export default putLatexProject;
