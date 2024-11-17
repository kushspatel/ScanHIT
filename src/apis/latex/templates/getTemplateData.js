import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const getTemplateData = async (templateId) => {
    if (!templateId) {
        return Promise.reject({
            error: true,
            message: 'templateId is mandatory in getTemplateData function',
        });
    }

    const instance = getAxiosInstance(getApiBase(serviceNames['asset']));

    try {
        const response = await instance.get(`/data/template_latex/${templateId}`);

        return response;  // Directly return response since response.data might be undefined
    } catch (error) {
        console.error('Error fetching template data:', error);
        throw error;  // Re-throw the error to be handled by the caller
    }
};

export default getTemplateData;
