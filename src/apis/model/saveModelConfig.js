import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for split screen
const saveModelConfig = async (configs) => {

    if(!configs) {
        return Promise.reject({
            error: true,
            message: 'configs mandatory for saving',
        });
    }
    const instance = getAxiosInstance(getApiBase(serviceNames['modelservice']));

    return instance.post(`/models/model-family/${configs?.base_family}/model_name/${configs?.model_name}`,configs);
};

export default saveModelConfig;
