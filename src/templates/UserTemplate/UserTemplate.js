import React, { Fragment } from 'react'
import { Route } from 'react-router'

export default function UserTemplate(props) {
    return (
        <div>
            <Route exact path={props.path} render={(propsRoute) => {
                return <Fragment>
                    
                    <props.component {...propsRoute}/>
                </Fragment>
            }}/>
        </div>
    )
}
