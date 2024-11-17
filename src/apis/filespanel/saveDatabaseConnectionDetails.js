import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const saveDatabaseConnectionDetails = async (database_type, connection_details) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['asset']));
    return instance.post(`/database_integration/${database_type}/connection_details`, connection_details);
};

export default saveDatabaseConnectionDetails;
