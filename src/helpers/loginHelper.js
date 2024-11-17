
import createCookie from '@/helpers/createCookie';
import { jwtDecode } from 'jwt-decode';
import login from '@/apis/authentication/login';
import getUserConfig from '@/apis/userManagement/getUserConfig';
import linkProfile from '@/apis/authentication/linkProfile';

const loginHelper = async (data) => {
    const {
        link=false,
    } = data;

    let loginResponse;
    if (link) {
        loginResponse = await linkProfile(data);
    } else {
        loginResponse = await login(data);
    }

    let userInformation, planPolicies, redirectLink;

    if (loginResponse?.data) {
        userInformation = loginResponse.data;

        if (loginResponse?.data?.token) {
            createCookie('accessToken', loginResponse.data.token, 24);
            planPolicies = jwtDecode(loginResponse.data.token)['plan-policies'];
        }

        if (loginResponse?.data?.policiesList) {
            createCookie('policies', btoa(JSON.stringify(loginResponse.data.policiesList)), 24);
        }

        // get user configuration
        await getUserConfig(loginResponse.data.token).then((response) => {
            userInformation = {...userInformation, config: response?.data?.configuration || {}};
        });

        redirectLink = planPolicies.length === 0 ? '/product/pricing' : '/chat';
    }

    return {
        userInformation,
        planPolicies,
        redirectLink,
    };
};

export default loginHelper;
