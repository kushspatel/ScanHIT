import getAxiosInstance from '@/apis/getAxiosInstance';
import { getApiBase } from '@/helpers/getApiBase';

// Assume getAxiosInstance and getApiBase are imported

const sendNotification = async ({ title, body, recipients, sendDateTime }) => {
    const instance = getAxiosInstance(getApiBase('notification')); // Adjust 'notificationServiceName' accordingly

    // Use the current date and time in ISO 8601 format if sendDateTime is not provided
    const dateTimeToSend = sendDateTime || new Date().toISOString();

    const payload = {
        title,
        body,
        notification_type: 'push',
        post_date_time: dateTimeToSend,
        user_id: recipients.split(';'), // Assuming recipients are separated by semicolons
        group_id: [],
    };

    return instance.post('/notifications/manage', payload);
};


export default sendNotification;
