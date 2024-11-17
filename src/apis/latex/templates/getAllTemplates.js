import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for getting all LaTeX templates
const getAllTemplates = async () => {
    const instance = getAxiosInstance(getApiBase(serviceNames['asset']));

    return instance.get('/template_asset');
};

export default getAllTemplates;
