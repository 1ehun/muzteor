const defaultState = {
    tabs: 'a'
}

const ADD_TABS = 'ADD_TABS'


export const addTabsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ADD_TABS:
            return {...state, tabs: state.tabs + action.payload }
        default:
            return state
    }
}
