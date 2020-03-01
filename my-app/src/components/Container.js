import React from 'react'
import {Footer, Nav} from './Navigation'
import AuctionList from './AuctionList'
import { Switch, Route } from 'react-router-dom'
import CloserLook from './CloserLook'
import { Signup } from './Signup'
import Login from './Login'



export const Container = () => {
    return (
        <div>
            <Nav/>
            <Switch>
                <Route exact path='/auctions' component={AuctionList}/>
                <Route exact path='/closerlook/:id' component={CloserLook}/>
                <Route exact path='/signup' component={Signup}/>
                <Route exact path='/login' component={Login}/>
            </Switch>
            <Footer/>
        </div>
    )
}
