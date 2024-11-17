import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for split screen
const getModelsByFamily = async (baseFamily) => {

    if(!baseFamily) {
        return Promise.reject({
            error: true,
            message: 'baseFamily mandatory to obtain models',
        });
    }
    const instance = getAxiosInstance(getApiBase(serviceNames['modelservice']));

    return instance.post('/models/config-models',baseFamily);
};

export default getModelsByFamily;
