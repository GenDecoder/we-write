import React from 'react'
import {
    Icon
} from './bases'
export const IconMenu = props => (
    <Icon
        iconName='icon-bars'
        baseCls='app-icon-bordered rounded-full'
        specificCls='app-icon-open-menu'
        size='x36'
        { ...props }
    />
);