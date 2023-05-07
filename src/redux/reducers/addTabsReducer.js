import { ADD_TABS } from "../actionTypes/addTabs"

const defaultState = {
    tabs: []
}




export const addTabsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ADD_TABS:
            return {
                ...state, 
                tabs: [
                    ...state.tabs,
                    {
                        artistName: action.payload.artistName,
                        songName: action.payload.songName,
                        body: action.payload.body,
                        id: action.payload.id
                    }

                ]
             }
        default:
            return state
    }
}
