import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const getAllRoles = async () => {
    const instance = getAxiosInstance(getApiBase(serviceNames.auth));

    try {
        const response = await instance.get('/roles');
        // Directly access the data array in the response
        const rolesData = response.data;


        // Assuming you only need the role names
        const roleNames = rolesData.map(role => role.name);
        return roleNames;
    } catch (error) {
        console.error('Error fetching role data:', error);
        throw new Error('Failed to fetch roles');
    }
};

export default getAllRoles;
