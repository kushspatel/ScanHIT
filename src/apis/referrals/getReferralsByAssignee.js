import getAxiosInstance from '../getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const getReferralsByAssignee = async (username) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['auth']));
    return instance.get(`/referrals/for/${username}`);
};

export default getReferralsByAssignee;
