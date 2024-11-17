// withAuth.js

// React
import React, { useEffect, useState } from 'react';

// Next
import Router from 'next/router';

//Store
import store from '@/store/store';

// Helpers
import readCookie from '@/helpers/readCookie';
import { jwtDecode } from 'jwt-decode';

//Redux

// Apis
import getUserDetails from '@/apis/authentication/getCurrentUser';


//Action
import { setUserInformation } from '@/store/user/actions';
import { deconstructForLoginPage } from './chatPageRouterConstructor';
import getUserConfig from '@/apis/userManagement/getUserConfig';

const withAuth = (WrappedComponent) => {
    const AuthGuard = (props) => {
        const [isLoading, setIsLoading] = useState(true);

        const { user } = store?.getState();

        const userId = user?.data?.id || '';

        const allowedRoutes = ['/login', '/register', '/forgotPassword', '/resetPassword', '/verify'];
        const openRoutes = ['/docs', '/terms', '/privacy'];
        const fallbackRoute = '/login';

        useEffect(() => {
            // if home page then redirect to chat page
            if (Router.pathname === '/') {
                setIsLoading(false);
                return;
            }


            const authenticate = async () => {

                let redirectLink = Router.pathname;

                try {
                    const accessToken = readCookie('accessToken') || '';

                    if(accessToken) {
                        if (!userId){
                            const xhrResponse = await getUserDetails(readCookie('accessToken') || '');

                            const configResponse = await getUserConfig(readCookie('accessToken'));

                            const userObject = {
                                'email' : xhrResponse?.data?.email || '',
                                'firstName' : xhrResponse?.data?.firstName || '',
                                'lastName' : xhrResponse?.data?.lastName || '',
                                'id' : xhrResponse?.data?.id || '',
                                'token' : accessToken || '',
                                'config' : configResponse?.data?.configuration || {},
                            };

                            store?.dispatch(setUserInformation(userObject));
                            const planPolicies = jwtDecode(accessToken)['plan-policies'];
                            // if lenght of plan-policies is 0 then redirect to product/plan page for purchase subscription
                            if(planPolicies.length === 0) {
                                Router.push('/product/pricing');
                            }
                        }

                        if (openRoutes.includes(Router.pathname)) {
                            setIsLoading(false);
                            return;
                        }

                        if (allowedRoutes.includes(redirectLink)) {
                            Router.push('/chat');
                        }
                    } else {
                        if (openRoutes.includes(Router.pathname)) {
                            setIsLoading(false);
                            return;
                        }

                        const urlParams = new URLSearchParams(window.location.search);
                        sessionStorage.setItem('workspaceId', deconstructForLoginPage(urlParams).workspaceId);
                        sessionStorage.setItem('sessionId', deconstructForLoginPage(urlParams).sessionId);

                        if (!allowedRoutes.includes(redirectLink)) {
                            Router.push(fallbackRoute);
                        }
                    }
                } catch (err) {
                    console.error('we have error at',err);
                    Router.push(fallbackRoute);
                }
                setIsLoading(false);
            };
            authenticate();
            //eslint-disable-next-line
        }, []);

        // If authentication is still in progress, you can render a loading state
        if (isLoading) {
            return <>Loading...</>;
        }

        // If authenticated, render the wrapped component
        return <WrappedComponent {...props} />;
    };

    return AuthGuard;
};

export default withAuth;
