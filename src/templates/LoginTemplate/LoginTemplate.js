import React, {Fragment } from 'react'
import { Route } from 'react-router'


export default function LoginTemplate(props) {
    return (
        <div>
            <Route exact path={props.path} render={(propsRoute) => {
                return <Fragment>
                    login
                    <props.component {...propsRoute}/>
                </Fragment>
            }}/> 
        </div>
    )
}
