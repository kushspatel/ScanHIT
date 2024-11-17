import useHasPolicy from '@/hooks/useHasPolicy';
import React from 'react';

const PolicyProvider = ({ children, policies = [] }) => {
    const hasValidPolicy = policies.some(useHasPolicy);

    if (!hasValidPolicy) {
        return null;
    }

    return <>{children}</>;
};

export default PolicyProvider;
