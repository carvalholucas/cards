import React, { useState, useEffect } from 'react'
import { Input } from 'antd'

import * as S from '../styles'

import {
    Network
} from '@styled-icons/zondicons'

import {
    Email,
    LocationPin
} from '@styled-icons/entypo'

import {
    Uber,
    Waze
} from '@styled-icons/fa-brands'

import {
    Instagram,
    Facebook,
    Twitter,
    Linkedin,
    Whatsapp,
} from '@styled-icons/boxicons-logos'

import {
    PhoneOutline
} from '@styled-icons/evaicons-outline'

const { TextArea } = Input

const DataLinks = ({ links, handle }) => {

    const [numWhats, setNumWhats] = useState(null)
    const [msgWhats, setMsgWhats] = useState(null)
    const [accountEmail, setAccountEmail] = useState(null)
    const [subjectEmail, setSubjectEmail] = useState(null)
    const [bodyEmail, setBodyEmail] = useState(null)

    useEffect(() => {
        handle({ name: "whatsapp", link: `https://api.whatsapp.com/send?phone=${numWhats}&text=${msgWhats}` })
    }, [numWhats, msgWhats])

    useEffect(() => {
        handle({ name: "email", link: `mailto:${accountEmail}?subject=${subjectEmail}&body=${bodyEmail}` })
    }, [accountEmail, subjectEmail, bodyEmail])

    return (
        <>
            {links.includes("instagram") && <S.DataLink>
                <Instagram size={35} style={{ marginRight: 10 }} />
                <section>
                    <Input
                        addonBefore="https://www.instagram.com/"
                        placeholder="Seu Instagram"
                        onBlur={e => {
                            handle({ name: "instagram", link: `https://www.instagram.com/${e.target.value}` })
                        }}
                    />
                </section>
            </S.DataLink>}

            {links.includes("facebook") && <S.DataLink>
                <Facebook size={35} style={{ marginRight: 10 }} />
                <section>
                    <Input
                        addonBefore="https://www.facebook.com/"
                        placeholder="Seu Facebook"
                        onBlur={e => {
                            handle({ name: "facebook", link: `https://www.facebook.com/${e.target.value}` })
                        }}
                    />
                </section>
            </S.DataLink>}

            {links.includes("twitter") && <S.DataLink>
                <Twitter size={30} style={{ marginRight: 10 }} />
                <section>
                    <Input
                        addonBefore="https://twitter.com/"
                        placeholder="Seu Twitter"
                        onBlur={e => {
                            handle({ name: "twitter", link: `https://twitter.com/${e.target.value}` })
                        }}
                        style={{ width: "100%" }}
                    />
                </section>
            </S.DataLink>}

            {links.includes("linkedin") && <S.DataLink>
                <Linkedin size={35} style={{ marginRight: 10 }} />
                <section>
                    <Input
                        addonBefore="https://www.linkedin.com/in/"
                        placeholder="Seu Linkedin"
                        onBlur={e => {
                            handle({ name: "linkedin", link: `https://www.linkedin.com/in/${e.target.value}` })
                        }}
                    />
                </section>
            </S.DataLink>}

            {links.includes("whatsapp") && <S.DataLink>
                <Whatsapp size={35} style={{ marginRight: 10 }} />
                <section>
                    <Input
                        placeholder="Seu Whatsapp"
                        onBlur={e => setNumWhats(e.target.value)}
                        style={{ marginBottom: 15 }}
                    />
                    <TextArea
                        rows={3} placeholder="Mensagem"
                        onBlur={e => setMsgWhats(e.target.value)}
                    />
                </section>
            </S.DataLink>}

            {links.includes("telefone") && <S.DataLink>
                <PhoneOutline size={35} style={{ marginRight: 10 }} />
                <section>
                    <Input
                        placeholder="Seu Telefone"
                        onBlur={e => {
                            handle({ name: "telefone", link: `tel:+55${e.target.value}` })
                        }}
                    />
                </section>
            </S.DataLink>}

            {links.includes("email") && <S.DataLink>
                <Email size={35} style={{ marginRight: 10 }} />
                <section>
                    <Input
                        placeholder="Seu Email"
                        onBlur={e => setAccountEmail(e.target.value)}
                        style={{ marginBottom: 15 }}
                    />
                    <Input
                        placeholder="Assunto"
                        onBlur={e => setSubjectEmail(e.target.value)}
                        style={{ marginBottom: 15 }}
                    />
                    <TextArea
                        rows={3}
                        placeholder="Corpo do e-email"
                        onBlur={e => setBodyEmail(e.target.value)}
                    />
                </section>
            </S.DataLink>}

            {links.includes("website") && <S.DataLink>
                <Network size={35} style={{ marginRight: 10 }} />
                <section>
                    <Input
                        placeholder="Link do seu website"
                        onBlur={e => {
                            handle({ name: "website", link: `${e.target.value}` })
                        }}
                    />
                </section>
            </S.DataLink>}

            {links.includes("uber") && <S.DataLink>
                <Uber size={35} style={{ marginRight: 10 }} />
                <Input
                    placeholder="Seu Endereço"
                    onBlur={e => {
                        handle({ name: "uber", link: `https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[formatted_address]=${e.target.value}` })
                    }}
                />
            </S.DataLink>}

            {links.includes("waze") && <S.DataLink>
                <Waze size={35} style={{ marginRight: 10 }} />
                <Input
                    placeholder="Seu Endereço"
                    onBlur={e => {
                        handle({ name: "waze", link: `https://waze.com/ul?q=${e.target.value}` })
                    }}
                />
            </S.DataLink>}

            {links.includes("localizacao") && <S.DataLink>
                <LocationPin size={35} style={{ marginRight: 10 }} />
                <Input
                    placeholder="Seu Endereço"
                    onBlur={e => {
                        handle({ name: "localizacao", link: `https://www.google.com/maps/search/?api=1&query=${e.target.value}` })
                    }}
                />
            </S.DataLink>}
        </>
    )
}

export default DataLinks;
