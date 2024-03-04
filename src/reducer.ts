// redux type'ını belirledikten sonra işlem yapılması durumunda kimlerin etkileneceğini ayarlıyoruz
export const Reducer = (state = { username: "" }, action: any) => {
  switch (action.type) {
    case "User":
      return { ...state, username: action.payload.username };
    default:
      return state;
  }
};
