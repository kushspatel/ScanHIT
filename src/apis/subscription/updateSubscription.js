import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// Updating Subscription Plan for User
const updateSubscription = async (data) => {
    if (!data) {
        return Promise.reject({
            error: true,
            message: 'data is mandatory for updating subscription',
        });
    }

    const instance = getAxiosInstance(getApiBase(serviceNames['subscription']));
    return instance.post('/user-plan-information', data);
};

export default updateSubscription;
