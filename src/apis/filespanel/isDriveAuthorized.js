import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const isDriveAuthorized = async (drive_name) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['asset']));
    return instance.get(`/drive_integration/${drive_name}/authorized`);
};

export default isDriveAuthorized;
