import { SendGet, SendPost } from '../utils/request';

export const loginWithEmail = async (email: string, password: string) => {
    return await SendPost(
        'auth/Login',
        {
            'email': email,
            'password': password,
        },
    );
};

export const loginWithGoogle = async () => {
    return await SendGet(
        'auth/google',
    );
};

export const verifyToken = async (token: string) => {
    return await SendGet(
        'auth/verify', token,
    );
};
