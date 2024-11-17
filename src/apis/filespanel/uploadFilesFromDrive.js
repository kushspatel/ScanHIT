import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const uploadFilesFromDrive = async (driveName, request) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['asset']));
    return instance.post(`drive_integration/${driveName}/files/upload`, request);
};

export default uploadFilesFromDrive;
