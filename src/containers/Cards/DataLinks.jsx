import React, { useState, useEffect } from 'react'
import { Input } from 'antd'

import * as S from './styles'

import {
    FacebookWithCircle,
    TwitterWithCircle,
    LinkedinWithCircle,
    InstagramWithCircle
} from '@styled-icons/entypo-social'

const DataLinks = ({ links, handle }) => {
    
    const [numWhats, setNumWhats] = useState(null)
    const [msgWhats, setMsgWhats] = useState(null)
    const [accountEmail, setAccountEmail] = useState(null)
    const [subjectEmail, setSubjectEmail] = useState(null)
    const [bodyEmail, setBodyEmail] = useState(null)

    useEffect(() => {
        handle({ name: "whatsapp", link: `https://api.whatsapp.com/send?phone=${numWhats}&text=${msgWhats}`})
    }, [numWhats, msgWhats])

    useEffect(() => {
        handle({ name: "email", link: `mailto:${accountEmail}?subject=${subjectEmail}&body=${bodyEmail}`})
    }, [accountEmail, subjectEmail, bodyEmail])

    return (
    <>
        {links.includes("instagram") && <S.DataLink>
            <InstagramWithCircle size={40} style={{ marginRight: 10 }} />
            <Input
                addonBefore="https://www.instagram.com/"
                placeholder="Seu Instagram"
                onBlur={e => {
                    handle({ name: "instagram", link: `https://www.instagram.com/${e.target.value}` })
                }}
            />
        </S.DataLink>}

        {links.includes("facebook") && <S.DataLink>
            <FacebookWithCircle size={40} style={{ marginRight: 10 }} />
            <Input
                addonBefore="https://www.facebook.com/"
                placeholder="Seu Facebook"
                onBlur={e => {
                    handle({ name: "facebook", link: `https://www.facebook.com/${e.target.value}` })
                }}
            />
        </S.DataLink>}

        {links.includes("twitter") && <S.DataLink>
            <TwitterWithCircle size={40} style={{ marginRight: 10 }} />
            <Input
                addonBefore="https://twitter.com/"
                placeholder="Seu Twitter"
                onBlur={e => {
                    handle({ name: "twitter", link: `https://twitter.com/${e.target.value}` })
                }}
            />
        </S.DataLink>}

        {links.includes("linkedin") && <S.DataLink>
            <LinkedinWithCircle size={40} style={{ marginRight: 10 }} />
            <Input
                addonBefore="https://www.linkedin.com/in/"
                placeholder="Seu Linkedin"
                onBlur={e => {
                    handle({ name: "linkedin", link: `https://www.linkedin.com/in/${e.target.value}` })
                }}
            />
        </S.DataLink>}

        {links.includes("whatsapp") && <S.DataLink>
            <LinkedinWithCircle size={40} style={{ marginRight: 10 }} />
            <Input
                placeholder="Seu Whatsapp"
                onBlur={e => setNumWhats(e.target.value)}
            />
            <Input
                placeholder="Mensagem"
                onBlur={e => setMsgWhats(e.target.value)}
            />
        </S.DataLink>}

        {links.includes("telefone") && <S.DataLink>
            <LinkedinWithCircle size={40} style={{ marginRight: 10 }} />
            <Input
                placeholder="Seu Telefone"
                onBlur={e => {
                    handle({ name: "telefone", link: `tel:+55${e.target.value}` })
                }}
            />
        </S.DataLink>}

        {links.includes("email") && <S.DataLink>
            <LinkedinWithCircle size={40} style={{ marginRight: 10 }} />
            <Input
                placeholder="Seu Email"
                onBlur={e => setAccountEmail(e.target.value)}
            />
            <Input
                placeholder="Assunto"
                onBlur={e => setSubjectEmail(e.target.value)}
            />
            <Input
                placeholder="Corpo do e-email"
                onBlur={e => setBodyEmail(e.target.value)}
            />
        </S.DataLink>}

        {links.includes("website") && <S.DataLink>
            <LinkedinWithCircle size={40} style={{ marginRight: 10 }} />
            <Input
                placeholder="Link do seu website"
                onBlur={e => {
                    handle({ name: "website", link: `${e.target.value}` })
                }}
            />
        </S.DataLink>}

        {links.includes("uber") && <S.DataLink>
            <LinkedinWithCircle size={40} style={{ marginRight: 10 }} />
            <Input
                placeholder="Seu Endereço"
                onBlur={e => {
                    handle({ name: "linkedin", link: `${e.target.value}` })
                }}
            />
        </S.DataLink>}

        {links.includes("waze") && <S.DataLink>
            <LinkedinWithCircle size={40} style={{ marginRight: 10 }} />
            <Input
                placeholder="Seu Endereço"
                onBlur={e => {
                    handle({ name: "linkedin", link: `${e.target.value}` })
                }}
            />
        </S.DataLink>}

        {links.includes("localizacao") && <S.DataLink>
            <LinkedinWithCircle size={40} style={{ marginRight: 10 }} />
            <Input
                placeholder="Seu Endereço"
                onBlur={e => {
                    handle({ name: "linkedin", link: `${e.target.value}` })
                }}
            />
        </S.DataLink>}
    </>
)
            }

export default DataLinks;
