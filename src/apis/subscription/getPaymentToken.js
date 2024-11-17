import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const getPaymentToken = (planId) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['subscription']));
    return instance.get('/payment/token/' + planId);
};

export default getPaymentToken;
