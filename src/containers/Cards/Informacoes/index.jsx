import React, { useContext } from 'react'

import { Input, Form, PageHeader } from 'antd'
import * as G from '../styles'
import { DrawerWrapper } from '../../../shared/styles'
import { CardContext } from '../contexts/CardContext'

const Informacoes = () => {

    const { state, dispatch } = useContext(CardContext)

    const { name, occupation } = state

    function handleChange(type, value) {
        const typeValue = type === 'name' ? 'NAME_CHANGED' : 'OCCUPATION_CHANGED'

        dispatch({
            type: typeValue,
            payload: value
        })
    }

    return (
        <DrawerWrapper
            placement="right"
            mask={false}
            closable={false}
            visible={state.infosIsVisible}
        >
            <>
                <PageHeader
                    onBack={() => dispatch({ type: 'INFO_IS_VISIBLE', payload: false })}
                    title="Insira suas informações"
                    style={{ padding: 0 }}
                />

                <G.SectionWrapper>
                    <Form layout="vertical">
                        <Form.Item label="Nome" name="name">
                            <Input
                                placeholder="Informe seu nome"
                                defaultValue={name}
                                onChange={e => handleChange("name", e.target.value)} />
                        </Form.Item>

                        <Form.Item label="Cargo ou Profissão" name="occupation">
                            <Input
                                placeholder="Informae seu cargo ou profissão"
                                defaultValue={occupation}
                                onChange={e => handleChange("name", e.target.value)} />
                        </Form.Item>
                    </Form>
                </G.SectionWrapper>
            </>
        </DrawerWrapper>
    )
}

export default Informacoes
