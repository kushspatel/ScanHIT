import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const fetchDriveFiles = async (drive_name) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['asset']));
    return instance.post(`drive_integration/${drive_name}/files`, {});
};

export default fetchDriveFiles;
