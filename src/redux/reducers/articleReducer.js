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
                        body: action.payload.body,
                        brief: action.payload.brief,
                        id: action.payload.id
                    }
                ]
             }
        default:
            return state
    }
}

export const addArticleAction = (payload) => ({type: ADD_ARTICLE, payload})