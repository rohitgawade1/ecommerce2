const initialState = [];
export const RandomUserData = (state = initialState, action) => {
  if (action.type === "randomuserdata") {
    return (state = action.data);
  }
  return state;
};
