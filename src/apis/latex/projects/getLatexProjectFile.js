import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for getting the .tex file of a specific LaTeX template
const getLatexProjectFile = async (projectId) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['asset']));

    return instance.get(`/project_latex/${projectId}`);
};

export default getLatexProjectFile;
