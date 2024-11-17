import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const deleteRole = async (role) => {
    const instance = getAxiosInstance(getApiBase(serviceNames.auth));
    try {
        await instance.delete(`/roles/${role}`);

        return true;
    } catch (error) {
        console.error('Error deleting role data:', error);
        throw new Error('Failed to delete roles');
    }
};

export default deleteRole;
