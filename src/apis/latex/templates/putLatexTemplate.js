import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const putLatexTemplate = async (templateId, templateData, file) => {
    if (!templateId || !templateData || !file) {
        return Promise.reject({
            error: true,
            message: 'templateId, templateData, and file are mandatory in putLatexTemplate function',
        });
    }

    try {
        const instance = getAxiosInstance(getApiBase(serviceNames['asset']));

        const formData = new FormData();
        formData.append('data', JSON.stringify(templateData));
        formData.append(templateData.latex_key, file);

        const response = await instance.put(`/template_latex/${templateId}`, formData);

        return response;
    } catch (error) {
        console.error('Error in putLatexTemplate:', error.response || error.message || error);
        return Promise.reject(error);
    }
};


export default putLatexTemplate;
