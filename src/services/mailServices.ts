import { SendPost } from '../utils/request';

export const sendContactMessage = async (name: string, email: string, content: string) => {
    return await SendPost(
        'guest/contact',
        {
            name:  name,
            mail : email,
            content: content,
        },
    );
};

export const sendPasswordForgot = async (email: string) => {
    return await SendPost(
        'user/forgotpassword',
        {
            mail : email,
        },
    );
};

export const subscribeNewslater = async (email: string) => {
    return await SendPost(
        'guest/subscribe', 
        {
            email: email,
        },
    );
};


