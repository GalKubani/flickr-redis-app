import React from 'react'
import {BrowserRouter, Switch,Route,Redirect} from 'react-router-dom'
import Home from '../components/home/Home'
import Footer from '../components/main/Footer'
import Header from '../components/main/Header'
import PageNotFound from '../components/main/PageNotFound'
import PhotoContextProvider from '../context/photoContext'
import SearchAPicture from '../components/photos/SearchAPicture'

const AppRouter=()=>(
    <BrowserRouter>
        <PhotoContextProvider>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/home"/>
                </Route>
                <Route path="/home" component={Home} />

                <Route path="*" component={PageNotFound} />
            </Switch>
            <Footer />
            </PhotoContextProvider>
    </BrowserRouter>
)

export default AppRouter