import React, { useContext } from 'react'

import EditOptionItem from './EditOptionItem'
import { CardContext } from '../contexts/CardContext'

import {
    Text,
    LinkAlt,
    Export
} from '@styled-icons/boxicons-regular'

import {
    ColorPaletteOutline,
    ImageOutline
} from '@styled-icons/evaicons-outline'

const EditOptions = () => {

    const { dispatch } = useContext(CardContext)

    const itens = [
        { name: 'Tema', value: 'tema', icon: <ColorPaletteOutline size={30} /> },
        { name: 'Logo', value: 'logo', icon: <ImageOutline size={30} /> },
        { name: 'Informações', value: 'infos', icon: <Text size={30} /> },
        { name: 'Links', value: 'links', icon: <LinkAlt size={30} /> },
        { name: 'Exportar Cartão', value: 'exporta', icon: <Export size={30} /> },
    ]

    function handleVisible(type, visible) {
        switch (type) {
            case "tema":
                dispatch({ type: 'TEMA_IS_VISIBLE', payload: visible })
                break;
            case "logo":
                dispatch({ type: 'LOGO_IS_VISIBLE', payload: visible })
                break;
            case "infos":
                dispatch({ type: 'INFO_IS_VISIBLE', payload: visible })
                break;
            case "links":
                dispatch({ type: 'LINKS_IS_VISIBLE', payload: visible })
                break;
            case "exporta":
                dispatch({ type: 'OPTION_IS_VISIBLE', payload: { exportaIsVisible: visible } })
                break;
            default:
                break;
        }
    }

    return (
        <>
            {itens.map(item => (
                <EditOptionItem
                    value={item.value}
                    name={item.name}
                    icon={item.icon}
                    handle={(type, visible) => handleVisible(type, visible)}
                />
            ))}
        </>
    )
}

export default EditOptions;
