import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const getAllSubscriptionAdmin = () => {
    const instance = getAxiosInstance(getApiBase(serviceNames['subscription']));
    return instance.get('/acl-plan-admin');
};

export default getAllSubscriptionAdmin;
