import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {AuctionCard} from './AuctionCard'

export default function AuctionList() {
const [actionsList, setAuctionList] = useState([])
    useEffect(() => {
        axios.get(`https://api.github.com/users/JosueRodriguez-webdev/followers`)
        .then(res => {
            setAuctionList(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    
    return (
        <div>
            {actionsList.map(auction => {
                return <AuctionCard key={auction.node_id} auction={auction} />
            })}
        </div>
    )
}
