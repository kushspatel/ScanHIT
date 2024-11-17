import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const getAggregationsData = async (data) => {
    const instance = getAxiosInstance(getApiBase(serviceNames.auth));

    try {
        if (!data) {
            return Promise.reject({
                error: true,
                message: 'data mandatory for aggregation',
            });
        }
        return instance.post('/aggregations', data);
    } catch (error) {
        console.error('Error with aggregations data', error);
        throw new Error('Failed to get aggregations data');
    }
};

export default getAggregationsData;
