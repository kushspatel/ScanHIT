import { serviceNames, getApiBase } from '@/helpers/getApiBase';
import axios from 'axios';
import { CONFIG } from '@/helpers/getApiBase';
import store  from '@/store/store';


const downloadAssets = async (assetId) => {
    if (!assetId) {
        return Promise.reject({
            error: true,
            message: 'assetId mandatory in downloadAssets function',
        });
    }

    try {
        const instance = axios.create({
            baseURL : getApiBase(serviceNames['asset']),
        });

        const {
            token = '',
        } = store?.getState()?.user?.data;

        const config = {
            'Authorization' : `Bearer ${token}`,
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Expires': '0',
            'responseType': 'blob',
            'accept': 'application/pdf',
        };

        const data = {
            asset_id: assetId,
        };

        instance.defaults.timeout = CONFIG.timeout || 5000;

        const response = await instance.post('/asset/fetch', data, {
            headers: config,
        });
        return response;
    } catch (error) {
        console.error('Error downloading asset:', error);
        throw error;
    }
};

export default downloadAssets;


