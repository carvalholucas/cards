import React from 'react'

import * as S from '../styles'

import { ChevronRightOutline } from '@styled-icons/evaicons-outline'

const EditOptionItem = ({ value, name, icon, handle }) => (
    <S.EditOptionWrapper onClick={() => handle(value, true)}>
        <S.EditOption>
            {icon}
            <p>{name}</p>
        </S.EditOption>
        <ChevronRightOutline size={30} />
    </S.EditOptionWrapper>
)

export default EditOptionItem
