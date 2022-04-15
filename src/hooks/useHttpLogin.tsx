import React, { useState } from 'react';

export interface RequestConfiguration {
    url: RequestInfo,
    method: string,
    headers: HeadersInit
    body: {
        email: String | undefined,
        password: String | undefined
    }
}


const useHttpLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = async (requestConfig: RequestConfiguration) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(requestConfig.url, {
                method: requestConfig.method,
                headers: requestConfig.headers,
                body: JSON.stringify(requestConfig.body),
            });
                
            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();
            return data;

        } catch (err: any) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    };
    return {
        isLoading,
        error,
        sendRequest
    };
};


export default useHttpLogin;