import React from 'react'

export default function CloserLook(props) {
    console.log(props)
    return (
        <div>
            <p>You are in the closerlook!</p>
    <p>{props.location.state.login}</p>
        </div>
    )
}
