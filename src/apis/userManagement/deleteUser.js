// apis/userManagement/deleteUser.js
import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const deleteUser = async (userId) => {
    if (!userId) {
        return Promise.reject({
            error: true,
            message: 'userId is mandatory in deleteUser',
        });
    }

    const instance = getAxiosInstance(getApiBase(serviceNames.auth));

    try {
        await instance.delete(`users/${userId}`, {
            headers: {'Content-Type': 'application/json'},
        });

        return 'User Deleted Successfully';
    } catch (error) {
        console.error('Error deleting user:', error);
        throw { error: true, message: 'Failed to delete user', details: error.response?.data || error.message };
    }
};

export default deleteUser;
