import React from 'react'
import {
    Provider
} from 'react-redux'
import {
    Link,
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from 'react-router-dom'

import store from './redux/store'

import Home from './containers/home/Home'
import Photos from './containers/Photos/Photos'

import {
    TopBarLogo,
    TopMenuItem
} from './components/navigation'

import {
    IconMenu
} from './components/icons'

const TOP_MENU_OPTIONS = [{
    text: 'Home',
    path: '/home'
}, {
    text: 'Photos',
    path: '/photos'
}];
const ROUTES = [{
    path: '/home',
    component: Home
}, {
    path: '/photos',
    component: Photos
}];

export default class extends React.Component {   
    render () {
        const me = this;
        return (
            <Provider
                store={ store }
            >
                <Router>
                    { me._app() }
                </Router>
            </Provider>
        );
    }
    _app = () => {
        const me = this;
        return (
            <div>
                {[
                    me._header(),
                    me._main(),
                    me._footer()
                ]}
            </div>
        );
    }
    _header = () => {
        const me = this;
        return (
            <header
                key='app-header'
            >
                <div
                    className='top-bar'
                >
                    <Route
                        path='/'
                        render={ TopBarLogo }
                    />
                    This containts the logo, some actions (Profile, login button, language, settings)
                    <IconMenu/>                    
                </div>

                <div
                    className='top-menu'
                >
                    { 
                        TOP_MENU_OPTIONS.map( 
                            (item, index) => (
                                <Route
                                    key={ item.path + '-' + index }
                                    path='/'
                                    render={ props => (
                                        <TopMenuItem
                                            { ...item }
                                            { ...props }
                                        />
                                    ) }
                                />
                            )
                        )
                    }
                </div>
            </header>
        );
    }
    _main = () => {
        const me = this;
        return (
            <main
                key='app-main'
            >
                <Switch>
                    <Redirect
                        exact
                        from='/'
                        to='/home'
                    />
                    {
                        ROUTES.map(
                            (item, index) => (
                                <Route
                                    exact
                                    key={ index }
                                    path={ item.path }
                                    component={ item.component }
                                />
                            )
                        )
                    }
                </Switch>
            </main>
        );
    }
    _footer = () => {
        const me = this;
        return (
            <footer
                key='app-footer'
            >

            </footer>
        );
    }
}