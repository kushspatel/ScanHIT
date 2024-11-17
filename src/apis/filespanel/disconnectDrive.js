import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const disconnectDrive = async (drive_name) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['asset']));
    return instance.delete(`/drive_integration/${drive_name}/disconnect`);
};

export default disconnectDrive;
