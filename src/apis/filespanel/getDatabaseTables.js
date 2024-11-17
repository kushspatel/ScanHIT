import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const getDatabaseTables = async (database_type, database_name) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['asset']));
    return instance.get(`/database_integration/${database_type}/databases/${database_name}/tables`);
};

export default getDatabaseTables;
