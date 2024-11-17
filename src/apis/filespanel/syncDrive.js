import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const syncDrive = async (drive_name) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['asset']));
    return instance.post(`drive_integration/${drive_name}/sync`, {});
};

export default syncDrive;
