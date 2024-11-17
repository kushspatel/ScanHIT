
import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for get userDetails
const setTutorialComplete = async () => {
    const instance = getAxiosInstance(getApiBase(serviceNames['auth']));
    return instance.post('/setTutorialComplete');
};

export default setTutorialComplete;
