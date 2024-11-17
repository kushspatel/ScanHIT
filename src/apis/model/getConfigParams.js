import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for split screen
const getConfigParams = async (baseFamily) => {

    if(!baseFamily) {
        return Promise.reject({
            error: true,
            message: 'baseFamily mandatory to obtain models',
        });
    }
    const instance = getAxiosInstance(getApiBase(serviceNames['modelservice']));

    return instance.get(`/models/model-families/${baseFamily}/schema`);
};

export default getConfigParams;
