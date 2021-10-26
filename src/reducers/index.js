import { combineReducers } from "redux";
import contactReduser from './contactReducer'
//maping
export default combineReducers({
    mycontact: contactReduser
})