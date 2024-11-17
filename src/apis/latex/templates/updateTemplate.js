import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for updating a specific LaTeX template
const updateTemplate = async (templateId, formData) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['asset']));

    return instance.put(`/template_latex/${templateId}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

export default updateTemplate;
