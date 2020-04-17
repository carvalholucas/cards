import React, { useContext, useState } from 'react'

import { PageHeader } from 'antd'
import * as G from '../styles'
import * as S from './styles'
import { DrawerWrapper } from '../../../shared/styles'
import { CardContext } from '../contexts/CardContext'

import { UploadOutlined } from '@ant-design/icons'
import { Block } from '@styled-icons/boxicons-regular'
import { ColorFill } from '@styled-icons/boxicons-solid'

const Logo = () => {

    const { state, dispatch } = useContext(CardContext)

    const [overlay, setOverlay] = useState("transparent")

    function handleChange(type, event) {
        const file = event.target.files[0]
        const typeImage = type === 'logo' ? 'LOGO_CHANGED' : 'BACKGROUND_CHANGED'

        if (!file) {
            return
        }

        generatePreviewImgUrl(file, preview => {
            dispatch({ 
                type: typeImage, 
                payload: preview 
            })
        })
    }

    function generatePreviewImgUrl(file, callback) {
        const reader = new FileReader()
        const url = reader.readAsDataURL(file)
        reader.onloadend = e => callback(reader.result)
    }


    function removerImagem(type) {
        const typeImage = type === 'logo' ? 'LOGO_CHANGED' : 'BACKGROUND_CHANGED'

        dispatch({ 
            type: typeImage, 
            payload: null 
        })
    }

    return (
        <DrawerWrapper
            placement="right"
            mask={false}
            closable={false}
            visible={state.logoIsVisible}
        >
            <>
                <PageHeader
                    onBack={() => dispatch({ type: 'LOGO_IS_VISIBLE', payload: false })}
                    title="Faça o upload do logotipo"
                    style={{ padding: 0 }}
                />
                <G.SectionWrapper>
                    <G.SectionTitle>Logo</G.SectionTitle>

                    <S.InputFile id="idLogo" onChange={e => handleChange("logo", e)} />
                    <S.LogoWrapper image={state.logo} />

                    <S.LabelFile for="idLogo" ><UploadOutlined style={{ marginRight: 15, fontSize: 18 }} />Upload do logotipo</S.LabelFile >
                    <S.RemoveFile onClick={() => removerImagem("logo")}>Remover esta imagem</S.RemoveFile>
                </G.SectionWrapper>

                <G.SectionWrapper>
                    <G.SectionTitle>Background</G.SectionTitle>

                    <S.InputFile id="idBg" onChange={e => handleChange("background", e)} />
                    <S.LogoWrapper image={state.background} />

                    <S.LabelFile for="idBg" ><UploadOutlined style={{ marginRight: 15, fontSize: 18 }} />Upload do logotipo</S.LabelFile >
                    <S.RemoveFile onClick={() => removerImagem("background")}>Remover esta imagem</S.RemoveFile>
                </G.SectionWrapper>

                <G.SectionWrapper>
                    <G.SectionTitle>Aplicar filtro background</G.SectionTitle>

                    <G.GridThemeWrapper>
                        <G.ThemeItem background="#f5f5f5" onClick={() => { setOverlay("transparent") }}>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <Block size={32} style={{ color: "#c6c6c6", marginBottom: 2 }} />
                                <p style={{ marginBottom: 0, fontWeight: 600, fontSize: 12 }}>Sem filtro</p>
                            </div>
                        </G.ThemeItem>

                        <G.ThemeItem background="#fff" selected={false} onClick={() => { setOverlay("#fff") }}>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <ColorFill size={32} style={{ color: "#c6c6c6", marginBottom: 2 }} />
                                <p style={{ marginBottom: 0, fontWeight: 600, fontSize: 12 }}>Light</p>
                            </div>
                        </G.ThemeItem>

                        <G.ThemeItem background="#2a2a2a" selected={false} onClick={() => { setOverlay("#000") }}>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <ColorFill size={32} style={{ color: "#c6c6c6", marginBottom: 2 }} />
                                <p style={{ marginBottom: 0, fontWeight: 600, fontSize: 12, color: "#fff" }}>Dark</p>
                            </div>
                        </G.ThemeItem>
                    </G.GridThemeWrapper>
                </G.SectionWrapper>
            </>
        </DrawerWrapper>
    )
}

export default Logo
