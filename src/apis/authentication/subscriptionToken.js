import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for logout
const subscriptionToken = async (username) => {

    const instance = getAxiosInstance(getApiBase(serviceNames['auth']));
    return instance.get(`/getSubscriptionTokens/${username}` );
};

export default subscriptionToken;
