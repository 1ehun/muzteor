// const defaultState = {
//     article5: '37',
//     // article4: '67'
//     headArticle: 'head'
// }

const defaultState = {
    article2:
   { article5: '39',
    headArticle: 'head'}
}



const ADD_ARTICLE = 'ADD_ARTICLE'
const ADD_HEAD = 'ADD_HEAD'


export const articleReducer = (state = defaultState, action) => {
    switch(action.type) {
        //  case ADD_ARTICLE:
        //      return {...state, article2: state.article2.article5 + action.payload }
        case ADD_ARTICLE:
            console.log(state);
            console.log(state.article2);
            console.log(state);
            return {...state, article2: state.article5 + action.payload }
        case ADD_HEAD:
            return {...state, headArticle: state.headArticle + action.payload }
        default:
            return state
    }
}
