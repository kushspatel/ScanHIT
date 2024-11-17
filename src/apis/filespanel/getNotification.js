import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const getNotification = (user_id, page_number=1, page_size=100) => {

    if(!user_id) {
        return Promise.reject({
            error: true,
            message: 'user_id mandatory in getNotification function',
        });
    }
    const instance = getAxiosInstance(getApiBase(serviceNames['notification']));
    return instance.get(`/notifications?user_id=${user_id}&page_number=${page_number}&page_size=${page_size}`);
};

export default getNotification;
