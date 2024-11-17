import getAxiosInstance from '../getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const deleteReferralById = async (referralId) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['auth']));
    return instance.delete(`/referrals/${referralId}`);
};

export default deleteReferralById;
