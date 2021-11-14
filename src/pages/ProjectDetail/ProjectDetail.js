import React from 'react'

export default function ProjectDetail(props) {
    return (
        <div>
            Project Detail: {props.match.params.id}
        </div>
    )
}
