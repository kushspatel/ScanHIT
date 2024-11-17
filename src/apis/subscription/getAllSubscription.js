import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const getAllSubscription = () => {
    const instance = getAxiosInstance(getApiBase(serviceNames['subscription']));
    return instance.get('/acl-plan');
};

export default getAllSubscription;
