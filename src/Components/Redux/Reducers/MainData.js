const initialState = [];
export const MainData = (state = initialState, action) => {
  if (action.type === "maindata") {
    return (state = action.data);
  }
  return state;
};
