// Bases
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
// Redux
import store from './redux/store'
// Containers
import Home from './containers/home/Home'
import Photos from './containers/photos/Photos'
import Floating from './containers/floating/Floating.component'
// Components
import {
    TopBarLogo,
    TopMenuItem
} from './components/navigation'
import {
    IconMenu
} from './components/icons'
// Procedures
import {
    isMobile
} from './procedures/dom'
// Constants
import {
    sidenavObservable,
    resizeObservable
} from './procedures/observables'
// i18n
import T from 'i18n-react'
// Constants
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

import test from './i18n/en.json'

class App extends React.Component {
    constructor(props) {
        super(props);
        const me = this;
        me.resizeSubscription = null;
        me.onMenuIconClick = me.onMenuIconClick.bind(me);
    }
//  _______     _______ _   _ _____ ____  
// | ____\ \   / / ____| \ | |_   _/ ___| 
// |  _|  \ \ / /|  _| |  \| | | | \___ \ 
// | |___  \ V / | |___| |\  | | |  ___) |
// |_____|  \_/  |_____|_| \_| |_| |____/ 
    onMenuIconClick = e => {
        const me = this;
        T.setTexts(test, {
            notFound: 'Not Found!'
        });
        me.setState({
            a: 1
        })
        sidenavObservable.next(true);
    }
//  _   _  ___   ___  _  ______  
// | | | |/ _ \ / _ \| |/ / ___| 
// | |_| | | | | | | | ' /\___ \ 
// |  _  | |_| | |_| | . \ ___) |
// |_| |_|\___/ \___/|_|\_\____/ 
    componentDidMount () {
        const me = this;
        me.resizeSubscription = resizeObservable.subscribe(
            e => console.log('do something on resize complete')
        );
    }
    componentWillUnmount () {
        const me = this;
        me.resizeSubscription.unsubscribe();
    }
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
//  ____   ___  __  __ 
// |  _ \ / _ \|  \/  |
// | | | | | | | |\/| |
// | |_| | |_| | |  | |
// |____/ \___/|_|  |_|
    _app = () => {
        const me = this;
        return (
            <div>
                {[
                    me._header(),
                    me._main(),
                    me._footer(),
                    <Floating key='floating'/>
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
                    <T.span text='greetings.hello'/>
                    {
                        isMobile() && 
                            <IconMenu
                                onClick={ me.onMenuIconClick }
                            />
                    }
                </div>
                
                {
                    !isMobile() &&
                        me._top_menu()
                }
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
    _top_menu = () => {
        const me = this;
        return (
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
        );
    }
}

export default App;