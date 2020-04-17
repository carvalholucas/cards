import React from 'react'

import * as S from '../styles'

import {
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
    Whatsapp
} from '@styled-icons/boxicons-logos'

import {
    Uber,
    Waze
} from '@styled-icons/fa-brands'

import {
    Network
} from '@styled-icons/zondicons'

import {
    Phone,
    Email,
    LocationPin
}from '@styled-icons/entypo'

const Links = ({ theme, links }) => {

    const handleIcon = (type) => ({
        'instagram': <Instagram size={25} />,
        'facebook': <Facebook size={25} />,
        'twitter': <Twitter size={25} />,
        'linkedin': <Linkedin size={25} />,
        'whatsapp': <Whatsapp size={25} />,
        'telefone': <Phone size={25} style={{transform: "rotate(90deg)"}}/>,
        'email': <Email size={25}/>,
        'website': <Network size={25}/>,
        'uber': <Uber size={25}/>,
        'waze': <Waze size={25}/>,
        'localizacao': <LocationPin size={25}/>
    }[type])

    return (
        <S.GridThemeWrapper>
            {links && links.map((link, index) => (
                <a href={link.href} target="_blanck" key={index}>
                    <S.LinkItem
                        size={52}
                        colorIcon={theme.color}>
                        {handleIcon(link.name)}
                    </S.LinkItem>
                </a>
            ))}
        </S.GridThemeWrapper>
    )
}

export default Links
