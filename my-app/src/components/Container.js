import React from 'react'
import {Footer, Nav} from './Navigation'
import AuctionList from './AuctionList'

export const Container = () => {
    return (
        <div>
            <Nav/>
            <AuctionList/>
            <Footer/>
        </div>
    )
}
