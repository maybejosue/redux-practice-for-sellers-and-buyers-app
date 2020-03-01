import React from 'react'
import {Footer, Nav} from './Navigation'
import AuctionList from './AuctionList'
import { Switch, Route } from 'react-router-dom'
import { Login } from './Login'
import { Signup } from './Signup'
import CloserLook from './CloserLook'

export const Container = () => {
    return (
        <div>
            <Nav/>
            <Switch>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/signup' component={Signup}/>
                <Route exact path='/auctions' component={AuctionList}/>
                <Route exact path='/closerlook/:id' component={CloserLook}/>
            </Switch>
            <Footer/>
        </div>
    )
}
