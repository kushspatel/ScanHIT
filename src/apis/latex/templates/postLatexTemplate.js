import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const postLatexTemplate = async (templateData, file) => {
    if (!templateData || !file) {
        return Promise.reject({
            error: true,
            message: 'templateData and file are mandatory in postLatexTemplate function',
        });
    }

    const instance = getAxiosInstance(getApiBase(serviceNames['asset']));

    const formData = new FormData();
    formData.append('data', JSON.stringify(templateData));
    formData.append(templateData.latex_key, file);

    return instance.post('/template_latex', formData);
};

export default postLatexTemplate;
