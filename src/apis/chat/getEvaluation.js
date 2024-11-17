import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for getting previous evaluations
const getEvaluation = async (chatObject) => {
    if (!chatObject) {
        return Promise.reject({
            error: true,
            message: 'chatObject mandatory in getEvaluation function',
        });
    }

    const { session_id, split_id } = chatObject;
    const instance = getAxiosInstance(getApiBase(serviceNames['chat']));

    return instance.get(`/evaluation?session_id=${session_id}&split_id=${split_id}`);
};

export default getEvaluation;
