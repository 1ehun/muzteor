import { combineReducers, createStore } from "redux";
import { articleReducer } from "./articleReducer";
import { addTabsReducer } from "./addTabsReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    article: articleReducer,
    addtabs: addTabsReducer
})

export const store = createStore(rootReducer, composeWithDevTools())