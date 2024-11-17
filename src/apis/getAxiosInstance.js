// Common axios instance for all apis call.
// Response and error handing has done in instace for api call
// Function will return axios instance

import axios from 'axios';
import { CONFIG } from '@/helpers/getApiBase';
import store  from '@/store/store';

const getAxiosInstance = (apiBaseUrl) => {

    // baseURL for every request
    const instance = axios.create({
        baseURL : apiBaseUrl,
    });

    const {
        id = '',
        token = '',
    } = store?.getState()?.user?.data;
    // array of possible error statuses
    const errorStatusArray = [409, 404, 401, 500, 400, 302];

    // Default instance configuration
    instance.defaults.timeout = CONFIG.timeout || 5000;

    // Common interceptor for request object
    instance.interceptors.request.use((config) => {

        // Based on isKeyCloakAuthentication header will added in request
        if(id && token) {
            config.headers = {
                'Authorization' : `Bearer ${token}`,
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Expires': '0',
            };
            // config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    });

    //Common interceptor for response object
    instance.interceptors.response.use(
        // Code for success
        (response) => {
            // const status = response?.status;

            return response?.data || {};
        },
        // Code for error
        (err) => {
            // detectServer() && console.error(err);
            const status = err?.response?.status || 500;

            if (axios.isCancel(err)) {
                return Promise.reject(err);
            } else if(errorStatusArray.indexOf(status) !== -1) {
                return Promise.reject(err?.response?.data || {});
            } else {
                return Promise.reject({
                    'message' : 'Something went wrong',
                    'status' : null,
                    'data' : null,
                });
            }
        }
    );

    return instance;
};

export default getAxiosInstance;
