import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const deleteDatabaseConnection = async (database_type, database_name) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['asset']));
    return instance.delete(`/database_integration/${database_type}/databases/${database_name}/connection_details`);
};

export default deleteDatabaseConnection;
