import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const convertLatexToPdf = async (file) => {
    if (!file) {
        return Promise.reject({
            error: true,
            message: 'File is mandatory in convertLatexToPdf function',
        });
    }

    const instance = getAxiosInstance(getApiBase(serviceNames['asset']));

    const formData = new FormData();
    formData.append('latex_data', file);  // Append the actual file object

    try {
        return await instance.post('/convert_tex_to_pdf', formData, {
            headers: {
                'Content-Type': 'multipart/form-data', // Ensure correct content type
            },
            responseType: 'blob', // Expecting PDF as a blob
        });
    } catch (error) {
        if (error.response && error.response.data) {
            // If the error is a server response, return the error data
            return Promise.reject(error.response.data);
        } else {
            // For any other errors, return the error object
            return Promise.reject(error);
        }
    }
};

export default convertLatexToPdf;
