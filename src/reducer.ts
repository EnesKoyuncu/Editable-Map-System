export const Reducer = (state = { username: '' }, action: any) => {
    switch (action.type) {
        case 'User':
            return { ...state, username: action.payload.username };
        default:
            return state;
    }
};
