import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

// API call for delete split screen
const deleteSplitScreen = async (chatObject) => {

    if(!chatObject) {
        return Promise.reject({
            error: true,
            message: 'chatObject mandatory in deleteSplitScreen function',
        });
    }
    const instance = getAxiosInstance(getApiBase(serviceNames['chat']));

    return instance.delete('/sessions/split',
        {
            data: chatObject,
        }
    );
};

export default deleteSplitScreen;
