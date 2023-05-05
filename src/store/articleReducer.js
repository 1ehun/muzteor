// const defaultState = {
//     article5: '37',
//     // article4: '67'
//     headArticle: 'head'
// }

const defaultState = {
    articles: []
}



const ADD_ARTICLE = 'ADD_ARTICLE';

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