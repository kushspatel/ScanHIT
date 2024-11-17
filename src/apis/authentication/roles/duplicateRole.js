import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const duplciateRole = async (request, oldRole) => {
    const instance = getAxiosInstance(getApiBase(serviceNames.auth));
    return instance.post(`/roles/${oldRole}`, request);
};

export default duplciateRole;
