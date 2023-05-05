import { ADD_TABS } from "../actionTypes/addTabs"

const defaultState = {
    tabs: 'a'
}




export const addTabsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ADD_TABS:
            return {...state, tabs: state.tabs + action.payload }
        default:
            return state
    }
}
