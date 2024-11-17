
import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for get userDetails
const getUserDetails = async (token) => {

    if(!token) {
        return Promise.reject({
            error: true,
            message: 'token mandatory in getUserDetails function',
        });
    }

    // Set up the headers with the Bearer token
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    };
    const instance = getAxiosInstance(getApiBase(serviceNames['auth']));

    return instance.get('/currentUser', config);
};

export default getUserDetails;
