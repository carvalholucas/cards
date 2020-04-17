import React, { useContext, useState } from 'react'

import { PageHeader } from 'antd'

import DataLinks from './DataLinks'
import * as G from '../styles'
import { DrawerWrapper } from '../../../shared/styles'
import { CardContext } from '../contexts/CardContext'
import SearchMultiSelect from '../../../shared/components/SearchMultiSelect'

export const options = [
    { value: "instagram", label: " Instagram" },
    { value: "facebook", label: "Facebook" },
    { value: "twitter", label: "Twitter" },
    { value: "linkedin", label: "Linkedin" },
    { value: "whatsapp", label: "Whatsapp" },
    { value: "telefone", label: "Telefone" },
    { value: "email", label: "Email" },
    { value: "website", label: "Website" },
    { value: "uber", label: "Uber" },
    { value: "waze", label: "Waze" },
    { value: "localizacao", label: "Localização" }
]

const Links = () => {
    const [dataLinks, setDataLinks] = useState([])

    const { state, dispatch } = useContext(CardContext)

    const { links } = state

    function handleChange(value) {
        const data = []

        value.map(link => {
            const hrefLink = links.find(val => val.name === link)?.href ? links.find(val => val.name === link).href : ""

            data.push({ name: link, href: hrefLink })

            return null
        })

        setDataLinks(value)
        dispatch({ type: 'LINKS_CHANGED', payload: data })
    }

    function handleHref({ name, link }) {
        const updatedLinks = [...links]

        if (updatedLinks.length > 0) {
            updatedLinks.find(val => val.name === name).href = link

            dispatch({ type: 'LINKS_CHANGED', payload: updatedLinks })
        }
    }

    return (
        <DrawerWrapper
            placement="right"
            mask={false}
            closable={false}
            visible={state.linksIsVisible}
        >
            <>
                <PageHeader
                    onBack={() => dispatch({ type: 'LINKS_IS_VISIBLE', payload: false })}
                    title="Adicione os links"
                    style={{ padding: 0 }}
                />
                <G.SectionWrapper>
                    <SearchMultiSelect options={options} placeholder="Selecione um ou mais link" handle={handleChange} />

                    <DataLinks links={dataLinks} handle={handleHref} />
                </G.SectionWrapper>
            </>
        </DrawerWrapper>
    )
}

export default Links
