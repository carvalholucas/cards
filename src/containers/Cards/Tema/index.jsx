import React, { useContext } from 'react'

import { PageHeader } from 'antd'
import * as G from '../styles'
import { DrawerWrapper } from '../../../shared/styles'
import { CardContext } from '../contexts/CardContext'
import { themes, gradients } from '../themes'

import { Edit } from '@styled-icons/evaicons-solid'

const Tema = ({ setTheme }) => {

    const { state, dispatch } = useContext(CardContext)

    function handleVisible(visible) {
        dispatch({ type: 'TEMA_IS_VISIBLE', payload: visible })
    }

    function changeTheme(theme) {
        dispatch({ type: 'THEME_CHANGED', payload: theme })
    }

    return (
        <DrawerWrapper
            placement="right"
            width="500px"
            mask={false}
            closable={false}
            visible={state.temaIsVisible}
        >
            <>
                <PageHeader
                    onBack={() => handleVisible(false)}
                    title="Selecione um tema"
                    style={{ padding: 0 }}
                />

                <G.SectionWrapper>
                    <G.SectionTitle>Cores Sólidas</G.SectionTitle>

                    <G.GridThemeWrapper>
                        {themes.map(theme => (
                            <G.ThemeItem background={theme.background} onClick={() => changeTheme(theme)}>
                                <G.ThemeIconItem color={theme.color} />
                            </G.ThemeItem>
                        ))}
                        <G.ThemeItem background="#fff" onClick={() => console.log()}>
                            <G.ThemeIconItem color="#e6e6e6">
                                <Edit size={20} />
                            </G.ThemeIconItem>
                        </G.ThemeItem>
                    </G.GridThemeWrapper>
                </G.SectionWrapper>

                <G.SectionWrapper>
                    <G.SectionTitle>Degradê</G.SectionTitle>

                    <G.GridThemeWrapper>
                        {gradients.map(gradient => (
                            <G.ThemeItem
                                color1={gradient.cores.color1}
                                color2={gradient.cores.color2}
                                gradient={true}
                                onClick={() => setTheme(gradient)}
                            >
                                <G.ThemeIconItem color={gradient.color} />
                            </G.ThemeItem>
                        )
                        )}
                    </G.GridThemeWrapper>
                </G.SectionWrapper>
            </>
        </DrawerWrapper>
    )
}

export default Tema
