import React from 'react'

import EditOptions from './EditOptions'
import Tema from './Tema'
import Logo from './Logo'
import Informacoes from './Informacoes'
import Links from './Links'
import Card from './Card'
import CardContextProvider from './contexts/CardContext'

import * as S from './styles'
import { Container } from '../../shared/styles/index'

const Home = () => (
    <S.RowGrid>
        <CardContextProvider>
            <S.Column>
                <S.CardWrapper>
                    <Card />
                </S.CardWrapper>
            </S.Column>
            <S.ColumnEdit>
                <Container>
                    <EditOptions />
                </Container>

                <Tema />
                <Logo />
                <Informacoes />
                <Links />
            </S.ColumnEdit>
        </CardContextProvider>
    </S.RowGrid>
)

export default Home
