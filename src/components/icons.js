import React from 'react'
import {
    Icon
} from './bases'
export const IconMenu = props => (
    <Icon
        iconName='icon-bars'
        baseCls='app-icon-bordered rounded-full'
        specificCls='app-icon-toggle-menu'        
        size='x36'
        { ...props }
    />
);

export const IconDropDownTrigger = props => (
    <Icon
        iconName='icon-chevron-down'
        baseCls='app-icon'
        specificCls='form-state-colors'
        size='x18'
        { ...props }
    />
);