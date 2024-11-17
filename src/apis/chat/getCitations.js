import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';


const getCitations = async (citationRequest) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['chat']));
    return instance.post('/chat/citations',citationRequest);
};

export default getCitations;
