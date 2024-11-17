import getAxiosInstance from '../getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const getReferralById = async (referralId) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['auth']));
    return instance.get(`/referrals/${referralId}`);
};

export default getReferralById;
