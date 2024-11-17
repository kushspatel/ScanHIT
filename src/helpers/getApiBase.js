// Common Configuration related to API
export const CONFIG = {
    env: process.env.NEXT_PUBLIC_APP_ENV || 'staging',
    timeout: 120000,
};

export const serviceNames = {
    auth: 'auth',
    asset: 'asset',
    chat: 'chatter',
    vector: 'vector',
    modelservice: 'model-service',
    notification: 'notification',
    builder: 'builder-service',
    subscription: 'subscription',
};

const apiBaseURL = process.env.NEXT_PUBLIC_APIBASE;
const notificationBaseURL = process.env.NEXT_PUBLIC_NOTIFICATION_API;
const builderBaseURL = process.env.NEXT_PUBLIC_APIBASE_BUILDERBASE;


// Function to get api url based on env
export const getApiBase = (serviceName, version = 'v1') => {
    if (serviceName === 'notification') {
        return `${notificationBaseURL}${serviceName}/${version}`;
    } else if (serviceName === 'builder-service') {
        return `${builderBaseURL}${serviceName}/${version}`;
    } else if (serviceName === 'subscription') {
        return `${apiBaseURL}${serviceName}/${version}`;
    } else {
        return `${apiBaseURL}${serviceName}/${version}`;
    }
};
