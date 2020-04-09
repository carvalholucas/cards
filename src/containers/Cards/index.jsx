import React, { useState } from 'react'
import { Row, Col, Input } from 'antd'
import Links from './Links'
import DataLinks from './DataLinks'

import * as S from './styles'
import { themes as T } from './themes'
import { Container } from '../../shared/styles/index'
import SearchMultiSelect from '../../shared/components/SearchMultiSelect'
import Image from '../../assets/bg.jpg'

const Home = () => {

    const [theme, setTheme] = useState(T.dark)
    const [name, setName] = useState("Lucas Carvalho")
    const [cargo, setCargo] = useState("Frontend Developer")
    const [links, setLinks] = useState([])
    const [dataLinks, setDataLinks] = useState([])

    const options = [
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

    function handleChange(value) {
        const data = []

        value.map(link => {
            const hrefLink = links.find(val => val.name === link)?.href ? links.find(val => val.name === link).href : ""

            data.push({ name: link, href: hrefLink })

            return null
        })

        setDataLinks(value)
        setLinks(data)
    }

    function handleHref({ name, link }) {
        const updatedLinks = [...links]

        if (updatedLinks.length > 0) {
            updatedLinks.find(val => val.name === name).href = link

            setLinks(updatedLinks)
        }
    }

    return (
        <Row style={{ height: "100%" }}>
            <Col flex="auto">
                <S.CardWrapper>
                    <S.Card background={theme.background}>
                        <S.CardHeader
                            background={Image}
                            blur={false}
                            overlay="#000" />
                        <S.CardUserArea fontColor={theme.color}>
                            <h1>{name}</h1>
                            <p>{cargo}</p>
                        </S.CardUserArea>
                        <S.CardLinks>
                            <Links theme={theme} links={links} />
                        </S.CardLinks>
                        <S.CardFooter>
                            <p>Clique nos ícones</p>
                        </S.CardFooter>
                    </S.Card>
                </S.CardWrapper>
            </Col>
            <Col flex="500px" style={{ background: "#fff" }}>
                <Container>
                    <p>Temas</p>
                    <S.GridThemeWrapper>
                        <S.ThemeItem background="#fff" onClick={() => setTheme(T.light)}>
                            <S.ThemeIconItem color="#2a2a2a" />
                        </S.ThemeItem>

                        <S.ThemeItem background="#2a2a2a" selected={false} onClick={() => setTheme(T.dark)}>
                            <S.ThemeIconItem color="#fff" />
                        </S.ThemeItem>
                    </S.GridThemeWrapper>
                    <br />
                    <br />
                    <p>Informações</p>
                    <Input placeholder="Nome" onChange={e => setName(e.target.value)} style={{ marginBottom: 15 }} />

                    <Input placeholder="Cargo ou Profissão" onChange={e => setCargo(e.target.value)} />

                    <br />
                    <br />
                    <p>Link/Redes Sociais</p>

                    <SearchMultiSelect options={options} placeholder="Selecione um ou mais link" handle={handleChange} />

                    <DataLinks links={dataLinks} handle={handleHref} />
                </Container>
            </Col>
        </Row>
    )
}

export default Home
