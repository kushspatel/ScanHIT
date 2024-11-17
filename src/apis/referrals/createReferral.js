import getAxiosInstance from '../getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const createReferral = async (createReferralRequest) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['auth']));
    return instance.post('/referrals', createReferralRequest);
};

export default createReferral;
