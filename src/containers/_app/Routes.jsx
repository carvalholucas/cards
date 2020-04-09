import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Layout from '../Layout'
import { MainLayout } from '../Layout/styles'
import Cards from '../Cards'

// const Pages = () => (

// )

const wrappedRoutes = () => (
    <MainLayout>
        <Layout>
            <Route exact path="/" component={Cards} />
            {/* <Route path="/" component={Pages} /> */}
        </Layout>
    </MainLayout>
)

const Routes = () => (
    <Switch>
        <Route path="/" component={wrappedRoutes} />
        <Redirect from="*" to="/" />
    </Switch>
)

export default Routes