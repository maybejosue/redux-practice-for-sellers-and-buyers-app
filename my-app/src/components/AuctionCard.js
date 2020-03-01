import React from 'react'

export const AuctionCard = ({auction}) => {
    const { login } = auction
    return (
        <div className='card' >
            <p>{login}</p>
        </div>
    )
}

