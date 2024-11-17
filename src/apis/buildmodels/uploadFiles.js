import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const uploadFiles = ({ assets, job_id }) => {

    const formData = new FormData();
    const asset_key = [];
    assets.forEach((asset, i) => {
        const assetKey = `asset_${i}`;
        asset_key.push(assetKey);
        formData.append(assetKey, asset);
    });

    const data = {
        job_id: job_id,
        asset_keys: asset_key,
    };

    formData.append('data', JSON.stringify(data));

    const instance = getAxiosInstance(getApiBase(serviceNames['builder']));
    return instance.post('/jobs/batch-files/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

export default uploadFiles;
