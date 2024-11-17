import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const updateDirStructure = ({asset_owner_username, dir_structure}) => {
    if (!Array.isArray(dir_structure)) {
        return Promise.reject({
            error: true,
            message: 'dirStructure is mandatory and must be an array',
        });
    }

    const instance = getAxiosInstance(getApiBase(serviceNames['asset']));
    return instance.put('/directories', {
        asset_owner_username, dir_structure,
    });
};

export default updateDirStructure;
