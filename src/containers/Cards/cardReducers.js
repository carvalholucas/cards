export const cardReducer = (state, action) => {
    switch (action.type) {
        case 'TEMA_IS_VISIBLE':
            return { ...state, temaIsVisible: action.payload }
        case 'LOGO_IS_VISIBLE':
            return { ...state, logoIsVisible: action.payload }
        case 'INFO_IS_VISIBLE':
            return { ...state, infosIsVisible: action.payload }
        case 'LINKS_IS_VISIBLE':
            return { ...state, linksIsVisible: action.payload }
        case 'THEME_CHANGED':
            return { ...state, theme: action.payload }
        case 'LOGO_CHANGED':
            return { ...state, logo: action.payload }
        case 'BACKGROUND_CHANGED':
            return { ...state, background: action.payload }
        case 'NAME_CHANGED':
            return { ...state, name: action.payload }
        case 'OCCUPATION_CHANGED':
            return { ...state, occupation: action.payload }
        case 'LINKS_CHANGED':
            return { ...state, links: action.payload }
        default:
            return state
    }
}