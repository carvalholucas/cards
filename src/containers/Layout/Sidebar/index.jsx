import React from 'react'

import { Avatar, Layout, Menu } from 'antd'
import { LinkOutlined, IdcardOutlined, UserOutlined } from '@ant-design/icons'
import * as S from './styles'

const { Sider } = Layout

const Sidebar = () => {
    return (
        <Sider
            trigger={null}
            collapsed={true}
            theme="light"
            collapsible
        >
            <S.LogoWrapper />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", height: "calc(100% - 80px)" }}>
                <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    style={{ border: 'none'}}>
                    <Menu.Item key="1">
                        <IdcardOutlined style={{ fontSize: '19px' }} />
                        <span>Cartões de Visita</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <LinkOutlined style={{ fontSize: '19px' }} />
                        <span>Links</span>
                    </Menu.Item>
                </Menu>
                <Avatar size={52} style={{ color: '#f56a00', backgroundColor: '#fde3cf', fontSize: 18 }}><UserOutlined /></Avatar>
            </div>
        </Sider>
    )
}

export default Sidebar
