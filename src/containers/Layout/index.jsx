import React from 'react'

import { Layout } from 'antd'
import Sidebar from './Sidebar'

const Wrapper = (props) => {
    return (
        <Layout>
            <Sidebar />
            <Layout>
                {props.children}
            </Layout>
        </Layout>
    )
}

export default Wrapper
