import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const fetchRolePolicies = async (roleName) => {
    const instance = getAxiosInstance(getApiBase(serviceNames.auth));

    try {
        const response = await instance.get(`/role-policies/${roleName}`);
        const policiesData = response.data;
        return {
            message: 'Fetched list of all the policies for a role successfully',
            data: policiesData,
        };
    } catch (error) {
        console.error('Error fetching role-specific policies:', error);
        throw new Error(`Failed to fetch policies for role: ${roleName}`);
    }
};

export default fetchRolePolicies;
