import React from 'react'
import { useHistory,useParams } from 'react-router-dom'

export const AuctionCard = ({auction}) => {
    const { login, node_id } = auction

    let history = useHistory()

    const sendToCloserLook = (id, auctionData) => {
        history.push(`/closerlook/${id}`, auctionData)
    }

    return (
        <div className='card' >
            <p onClick={() => {sendToCloserLook(node_id, auction)}}>{login}</p>
        </div>
    )
}

