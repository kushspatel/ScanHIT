import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const getProjectVersions = async (projectId) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['asset']));
    return instance.get(`/get_version/${projectId}`);
};

export default getProjectVersions;
