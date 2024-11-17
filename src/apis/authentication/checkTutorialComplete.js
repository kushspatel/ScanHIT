
import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for get userDetails
const checkTutorialComplete = async () => {
    const instance = getAxiosInstance(getApiBase(serviceNames['auth']));
    return instance.get('/checkTutorialComplete');
};

export default checkTutorialComplete;
