import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const deleteAssets = ({asset_ids}) => {
    if (!asset_ids || !Array.isArray(asset_ids) || asset_ids.length === 0) {
        return Promise.reject({
            error: true,
            message: 'asset_ids is mandatory and must be an non-empty array in deleteAssets',
        });
    }

    const instance = getAxiosInstance(getApiBase(serviceNames['asset']));
    return instance.delete('/assets', {
        data: {asset_ids},
        headers: {'Content-Type': 'application/json'},
    });
};

export default deleteAssets;
