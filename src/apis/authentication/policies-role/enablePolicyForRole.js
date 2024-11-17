import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const enablePolicyForRole = async (role, policy) => {
    const instance = getAxiosInstance(getApiBase(serviceNames.auth));
    const url = `/role-policies/roles/${role}/policies/${policy}/enable`;

    try {
        await instance.post(url);
        return {
            'message': 'Enabled policy for role',
            'data': '',
        };
    } catch (error) {
        throw new Error(`Failed to enable policy for role: ${role}`);
    }
};

export default enablePolicyForRole;
