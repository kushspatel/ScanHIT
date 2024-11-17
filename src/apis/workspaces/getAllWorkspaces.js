import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call to get workspace groups via a POST request
const getAllWorkspaces = async () => {

    const instance = getAxiosInstance(getApiBase(serviceNames['chat']));

    return instance.get('/workspace/groups');
};

export default getAllWorkspaces;
