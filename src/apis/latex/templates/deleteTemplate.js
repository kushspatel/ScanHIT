import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const deleteLatexTemplate = async (projectId) => {
    if (!projectId) {
        return Promise.reject({
            error: true,
            message: 'projectId is mandatory in deleteLatexProject function',
        });
    }

    const instance = getAxiosInstance(getApiBase(serviceNames['asset']));

    return instance.delete(`/template_latex/${projectId}`);
};

export default deleteLatexTemplate;
