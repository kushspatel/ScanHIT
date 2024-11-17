import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const getProjectData = async (projectId) => {
    if (!projectId) {
        return Promise.reject({
            error: true,
            message: 'projectId is mandatory in getProjectData function',
        });
    }

    const instance = getAxiosInstance(getApiBase(serviceNames['asset']));

    try {
        const response = await instance.get(`/data/project_latex/${projectId}`);

        return response;  // Directly return response since response.data might be undefined
    } catch (error) {
        console.error('Error fetching project data:', error);
        throw error;  // Re-throw the error to be handled by the caller
    }
};

export default getProjectData;

