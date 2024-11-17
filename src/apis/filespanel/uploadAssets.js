import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const uploadAssets = ({ assets, userName }) => {
    if (!Array.isArray(assets)) {
        return Promise.reject({
            error: true,
            message: 'assets is mandatory and must be an array',
        });
    }

    const formData = new FormData();
    const assetMetaData = [];
    assets.forEach((asset, i) => {
        const assetKey = `asset_${i}`;
        const assetType = (asset.subtype || asset.type || 'PDF').toUpperCase();

        assetMetaData.push({
            asset_type: assetType,
            asset_name: asset.label,
            asset_description: '',
            asset_owner_username: userName,
            asset_key: assetKey,
            asset_metadata: {
                ...(assetType === 'WEB_LINK'
                    ? { web_url: asset.url, depth: 0 }
                    : assetType === 'AV_LINK'
                        ? { video_url: asset.url }
                        : {}),
            },
        });

        asset.type === 'file' && formData.append(assetKey, asset.file);
    });
    formData.append('data', JSON.stringify(assetMetaData));

    const instance = getAxiosInstance(getApiBase(serviceNames['asset']));
    return instance.post('/assets', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

export default uploadAssets;
