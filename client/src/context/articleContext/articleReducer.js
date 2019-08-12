import { 
    GET_ARTICLES,
    GET_SINGLE,
    SAVE_ARTICLE,
    EDIT_ARTICLE,
    DELETE_ARTICLE,
    CLEAR_SINGLE,
    FILTER_BY_TYPE,
    CLEAR_TYPE,
    NEXT_ARTICLES,
} from '../types'


export default (state, action) => {
    switch (action.type) {
        case GET_ARTICLES:
            return {
                ...state, 
                articles: action.payload,
            }

        case GET_SINGLE:
            return {
                ...state,
                single: action.payload,
            }

        case SAVE_ARTICLE:
        case EDIT_ARTICLE:
            return {
                ...state, 
                single: [action.payload],
            }

        case DELETE_ARTICLE:
            return {
                ...state,
                articles: state.articles.filter(article => article._id !== action.payload)
            }
        
        case CLEAR_SINGLE:
            return {
                ...state,
                single: null
            }

        case FILTER_BY_TYPE:
            return {
                ...state,
                type: state.articles.filter(article => {
                    return article.isPublished === action.payload
                })
            }
        
        case NEXT_ARTICLES:
            return {
                ...state,
                next: state.articles.filter((article, index) => {
                    if (article._id !== action.payload && article.isPublished === true) {
                        return article
                    }
                })
            }

        default:
            return state
    }
}
