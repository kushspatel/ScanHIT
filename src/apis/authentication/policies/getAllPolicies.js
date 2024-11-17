import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const getAllPolicies = async () => {
    const instance = getAxiosInstance(getApiBase(serviceNames.auth));

    try {
        const response = await instance.get('/policies');
        // Directly access the data array in the response
        const policiesData = response.data;

        return policiesData;
    } catch (error) {
        console.error('Error fetching policy data:', error);
        throw new Error('Failed to fetch policies');
    }
};

export default getAllPolicies;
