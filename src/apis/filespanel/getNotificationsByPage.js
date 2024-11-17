import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const getNotificationsByPage = (page = 1) => {
    const instance = getAxiosInstance(getApiBase(serviceNames['notification']));
    return instance.get(`/get_all_notifications?page=${page}`);
};

export default getNotificationsByPage;
