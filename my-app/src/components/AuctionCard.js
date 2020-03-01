import React from 'react'
import { useParams } from 'react-router-dom'

export const AuctionCard = ({auction}) => {
    const { login } = auction
    let {id} = useParams()
    console.log(id)
    return (
        <div className='card' >
            <p>{login}</p>
        </div>
    )
}

