import { SendGet, SendPost, SendPut } from '../utils/request';

export const registerUser = async (username: string, email: string, password: string, name: string) => {
    return await SendPost(
        'user/signup',
        {
            'username': username,
            'password': password,
            'email': email,
            'userimage': '-',
            'name': name,
        },
    );
};
export const getUserById = async (id: string, token: string) =>{
    return await SendGet(
        'user/id/' + id,
        token,
    );
};

export const updateUserPassword = async (id: string, oldPassword: string, newPassword:string, token: string) => {
    return await SendPut(
        'user/updatepassword',
        {
            oldPassword: oldPassword,
            newPassword: newPassword,
        },
        token,
    );
};
export const updateUserForgotPassword = async (newPassword:string, token: string) => {
    return await SendPut(
        'user/resetpassword',
        {
            newPassword: newPassword,
        },
        token,
    );
};
