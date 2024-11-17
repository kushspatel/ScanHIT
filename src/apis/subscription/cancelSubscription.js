import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// cancel Subscription Plan for User
const cancelSubscription = async (data) => {
    if (!data) {
        return Promise.reject({
            error: true,
            message: 'data is mandatory for canceling subscription',
        });
    }
    const instance = getAxiosInstance(getApiBase(serviceNames['subscription']));
    return instance.post('/cancel-subscription', data);
};

export default cancelSubscription;
