import React, { useContext } from 'react'

import { CardContext } from './contexts/CardContext'

import Links from './Links/LinkItem'
import * as S from './styles'

const Card = () => {

    const { state } = useContext(CardContext)
    
    const { theme, name, occupation, logo, links } = state

    return (
        <S.Card background={theme.background ? theme.background : theme.cores} gradient={true}>
            {/* <S.CardHeader
                background={background}
                blur={false}
                overlay={overlay}>
            </S.CardHeader> */}
            <S.CardHeaderLogo>
                <img src={logo} style={{ width: "70%" }} />
            </S.CardHeaderLogo>
            <S.CardUserArea fontColor={theme.color}>
                <h1>{name}</h1>
                <p>{occupation}</p>
            </S.CardUserArea>
            <S.CardLinks>
                <Links theme={theme} links={links} />
            </S.CardLinks>
            <S.CardFooter>
                <p>Toque nos ícones para interagir</p>
            </S.CardFooter>
        </S.Card>
    )
}

export default Card
