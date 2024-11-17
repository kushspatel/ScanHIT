import readCookie from '@/helpers/readCookie';

const useHasPolicy = (policyName) => {


    try {
        if (!policyName) {
            throw new Error('Policy name is required');
        }
        if (!document.cookie) {
            return false;
        }
        const policies = JSON.parse(atob(readCookie('policies')));
        return policies && policies.includes(policyName);
    } catch (error) {
        console.error('Error authorizing user based on policy');
        return false;
    }

};

export default useHasPolicy;

