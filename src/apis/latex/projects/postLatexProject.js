import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const postProjectLatex = async (projectData, file) => {
    if (!projectData || !file) {
        return Promise.reject({
            error: true,
            message: 'projectData and file are mandatory in postProjectLatex function',
        });
    }

    const instance = getAxiosInstance(getApiBase(serviceNames['chat']));

    const formData = new FormData();
    formData.append('data', JSON.stringify({
        latex_key: projectData.latex_key,
        project_name: projectData.project_name,
        project_description: projectData.project_description,
        latex_template_id: projectData.latex_template_id,
    }));
    formData.append(projectData.latex_key, file);

    return instance.post('/project', formData);
};

export default postProjectLatex;
