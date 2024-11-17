import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const verifyDatabaseConnectionDetails = async (database_type, connection_details) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['asset']));
    return instance.post(`/database_integration/${database_type}/test`, connection_details);
};

export default verifyDatabaseConnectionDetails;
