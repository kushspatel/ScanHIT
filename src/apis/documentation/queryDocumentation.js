import getAxiosInstance from '../getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const queryDocumentation = async (searchText) => {

    const data = {
        'query': searchText,
    };

    const instance = getAxiosInstance(getApiBase(serviceNames['asset']));
    return instance.post('/documentation/query', data);
};

export default queryDocumentation;
