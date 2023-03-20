const initialState = []
export const CategoryData = (state=initialState, action) => {
    if(action.type === 'catagoryData'){
        return state = action.data
    }
    return state
}