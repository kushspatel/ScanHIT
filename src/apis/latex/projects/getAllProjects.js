import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for getting all LaTeX templates
const getAllProjects = async () => {
    const instance = getAxiosInstance(getApiBase(serviceNames['asset']));

    return instance.get('/project_asset');
};

export default getAllProjects;
