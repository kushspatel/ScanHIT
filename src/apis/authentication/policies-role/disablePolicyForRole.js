import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const disablePolicyForRole = async (role, policy) => {
    const instance = getAxiosInstance(getApiBase(serviceNames.auth));
    const url = `/role-policies/roles/${role}/policies/${policy}/disable`;

    try {
    // Perform the POST request without storing the response, since it's not used
        await instance.post(url);

        // Return the expected message structure directly
        return {
            message: 'Disabled policy for role',
            data: '',
        };
    } catch (error) {
    // Adjusted to throw an error without logging to the console
        throw new Error(`Failed to disable policy for role: ${role}`);
    }
};

export default disablePolicyForRole;
