import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const getUserPlanSubscription = () => {
    const instance = getAxiosInstance(getApiBase(serviceNames['subscription']));
    return instance.get('/user-plan');
};

export default getUserPlanSubscription;
