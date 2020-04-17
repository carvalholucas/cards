import React, { createContext, useReducer } from 'react'

import { themes } from '../themes'
import { cardReducer } from '../cardReducers'

export const CardContext = createContext()

const CardContextProvider = ({ children }) => {

    const initialState = {
        temaIsVisible: false,
        logoIsVisible: false,
        infosIsVisible: false,
        linksIsVisible: false,
        exportaIsVisible: false,
        theme: themes[0],
        name: "Seu nome aqui",
        occupation: "Seu cargo aqui",
        logo: null,
        background: null,
        links: []
    }

    const [state, dispatch] = useReducer(cardReducer, initialState)

    return (
        <CardContext.Provider value={{ state, dispatch }}>
            {children}
        </CardContext.Provider>
    )
}

export default CardContextProvider
