import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const getAssets = (params = {}) => {
    let {asset_ids} = params;
    if (!asset_ids || !Array.isArray(asset_ids)) {
        asset_ids = [];
    }

    const instance = getAxiosInstance(getApiBase(serviceNames['asset']));
    return instance.post('/assets/user', {asset_ids});
};

export default getAssets;
