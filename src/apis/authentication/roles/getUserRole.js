import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const getUserRole = async (email) => {
    const instance = getAxiosInstance(getApiBase(serviceNames.auth));

    try {
        const response = await instance.get(`/user-roles/users/${email}`);
        // Directly access the data array in the response
        const userRole = response.data;

        // Assuming you only need the role names
        return [...new Set(userRole)];
    } catch (error) {
        console.error('Error fetching role data:', error);
        throw new Error('Failed to fetch roles');
    }
};

export default getUserRole;
