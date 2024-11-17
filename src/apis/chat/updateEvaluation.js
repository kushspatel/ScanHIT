import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for updating the evaluation
const updateEvaluation = async (evaluationObject) => {
    if (!evaluationObject) {
        return Promise.reject({
            error: true,
            message: 'evaluationObject mandatory in updateEvaluation function',
        });
    }

    const instance = getAxiosInstance(getApiBase(serviceNames['chat']));

    return instance.put('/evaluation', evaluationObject);
};

export default updateEvaluation;
