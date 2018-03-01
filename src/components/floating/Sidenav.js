import React from 'react'
import {
    sidenavObservable
} from '../../procedures/observables'

class SideNav extends React.Component {
    render () {
        return (
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'grey'
                }}
                onClick={ e => sidenavObservable.next(false) }
            >
                <h1>
                    This is the SideNav
                </h1>
            </div>
        );
    }
}

export default SideNav;