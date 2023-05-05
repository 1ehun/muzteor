import { ADD_ARTICLE } from "../actionTypes/addArticle"


const defaultState = {
    articles: []
}





export const articleReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return {
                ...state, 
                articles: [
                    ...state.articles,
                    {
                        title: action.payload.title,
                        body: action.payload.body
                    }

                ]
             }
        default:
            return state
    }
}