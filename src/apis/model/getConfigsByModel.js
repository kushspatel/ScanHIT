import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for split screen
const getConfigByModel = async (modelInfo) => {

    if(!modelInfo) {
        return Promise.reject({
            error: true,
            message: 'modelInfo mandatory to obtain models',
        });
    }
    const instance = getAxiosInstance(getApiBase(serviceNames['modelservice']));

    return instance.get(`/models/model-family/${modelInfo?.base_family}/model_name/${modelInfo?.model_name}`);
};

export default getConfigByModel;
