import {combineReducers} from 'redux'
import { CategoryData } from './CategoryData'
import { MainData } from './MainData'
import { RandomUserData } from './RandomUserData'
export const rootReducer = combineReducers({
    MainData : MainData,
    CategoryData:CategoryData,
    RandomUserData:RandomUserData
})