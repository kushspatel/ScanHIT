import getAxiosInstance from '../getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const getReferralsByPage = async (page = 1) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['auth']));
    try {
        const response = instance.get(`/referrals?page=${page}`);
        return response;
    } catch (error) {
        console.error('Error fetching referral data:', error);
        throw { error: true, message: 'Failed to fetch referrals' };
    }
};

export default getReferralsByPage;
