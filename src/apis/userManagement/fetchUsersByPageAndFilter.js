import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const fetchUsersByPageAndFilter = async (page = 1, filter = '') => {
    const instance = getAxiosInstance(getApiBase(serviceNames.auth));

    try {

        const filterObject = {
            'operand': 'OR',
            'filters': [
                {
                    'field': 'firstName',
                    'value': filter,
                    'operation': 'LIKE',
                },
                {
                    'field': 'lastName',
                    'value': filter,
                    'operation': 'LIKE',
                },
                {
                    'field': 'email',
                    'value': filter,
                    'operation': 'LIKE',
                },
            ],
        };

        const encodedString = encodeURIComponent(JSON.stringify(filterObject));

        const response = await instance.get(`users?page=${page}&filter=${encodedString}`);
        return response;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw { error: true, message: 'Failed to fetch users' };
    }
};


export default fetchUsersByPageAndFilter;
