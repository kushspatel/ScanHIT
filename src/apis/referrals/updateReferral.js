import getAxiosInstance from '../getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const updateReferral = async (updateReferralRequest) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['auth']));
    return instance.put('/referrals', updateReferralRequest);
};

export default updateReferral;
