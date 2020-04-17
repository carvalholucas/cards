import styled from 'styled-components'
import media from 'styled-media-query'

import { Layout, Drawer } from 'antd'

const { Content } = Layout

export const Container = styled(Content)`
    padding: 24px;
`

export const DrawerWrapper = styled(Drawer)`
    .ant-drawer-content-wrapper {
        width: 35vw !important; 
    }

    ${media.lessThan("medium")`
        .ant-drawer-content-wrapper {
            width: 100vw !important; 
        }
    `}
`