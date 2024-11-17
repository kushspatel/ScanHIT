import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for submitting the evaluation
const submitEvaluation = async (evaluationObject) => {
    if (!evaluationObject) {
        return Promise.reject({
            error: true,
            message: 'evaluationObject mandatory in submitEvaluation function',
        });
    }

    const instance = getAxiosInstance(getApiBase(serviceNames['chat']));

    return instance.post('/evaluation', evaluationObject);
};

export default submitEvaluation;
