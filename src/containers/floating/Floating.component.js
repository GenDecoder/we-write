import React from 'react'
import {
    connect
} from 'react-redux'

import Dialog from '../../components/floating/Dialog'
import Sidenav from '../../components/floating/Sidenav'

import {
    dialogObservable,
    sidenavObservable
} from '../../procedures/observables'

class Floating extends React.Component {
    constructor(props) {
        super(props);
        const me = this;
        me.dialogSubscription = null;
        me.sidenavSubscription = null;
        me.onDialogUpdated = me.onDialogUpdated.bind(me);
        me.onSidenavUpdated = me.onSidenavUpdated.bind(me);
        me.state = {
            dialog: false,
            sidenav: false
        };
    }
//  _______     _______ _   _ _____ ____  
// | ____\ \   / / ____| \ | |_   _/ ___| 
// |  _|  \ \ / /|  _| |  \| | | | \___ \ 
// | |___  \ V / | |___| |\  | | |  ___) |
// |_____|  \_/  |_____|_| \_| |_| |____/ 
    onSidenavUpdated = isOn => {
        const me = this;
        me.setState({
            sidenav: isOn
        });
    }
    onDialogUpdated = isOn => {
        const me = this;
        me.setState({
            dialog: isOn
        });
    }
//  _   _  ___   ___  _  ______  
// | | | |/ _ \ / _ \| |/ / ___| 
// | |_| | | | | | | | ' /\___ \ 
// |  _  | |_| | |_| | . \ ___) |
// |_| |_|\___/ \___/|_|\_\____/ 
    componentWillMount () {
        const me = this;
        me.dialogSubscription = dialogObservable.subscribe(me.onDialogUpdated);
        me.sidenavSubscription = sidenavObservable.subscribe(me.onSidenavUpdated);
    }
    componentWillUnmount () {
        const me = this;
        me.dialogSubscription.unsubscribe();
        me.sidenavSubscription.unsubscribe();
    }
    render () {        
        const me = this;
        const {
            dialog,
            sidenav
        } = me.state;
        return (
            <div>
                {[
                    dialog &&
                        <Dialog
                            key='dialog'
                            { ...dialog }
                        />,
                    sidenav &&
                        <Sidenav
                            key='sidenav'
                        />
                ]}
            </div>
        );
    }
}

export default Floating;