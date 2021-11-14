import React, { Fragment } from 'react'
import { Route } from 'react-router'
import MainMenu from '../../components/MainMenu/MainMenu'

export default function HomeTemplate(props) {
    return <Fragment>
        <Route exact path={props.path} render={(propsRoute) =>{
            return <Fragment>
                <MainMenu/>
                <props.component {...propsRoute}/>

            </Fragment>
        }} />
    </Fragment>
}
