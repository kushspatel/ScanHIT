import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const addUserRole = async (email, role) => {
    const instance = getAxiosInstance(getApiBase(serviceNames.auth));

    try {
        const params = {
            'username' : email,
            'roleName' : role,
        };
        await instance.post('/user-roles', params);

        return true;
    } catch (error) {
        console.error('Error adding role data:', error);
        throw new Error('Failed to add roles');
    }
};

export default addUserRole;
