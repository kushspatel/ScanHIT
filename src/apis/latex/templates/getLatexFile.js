import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for getting the .tex file of a specific LaTeX template
const getLatexFile = async (templateId, raw) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['asset']));

    return instance.get(`/template_latex/${templateId}/version/${raw}`);
};

export default getLatexFile;
