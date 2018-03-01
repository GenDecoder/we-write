import React from 'react'

export const Icon = ({
    iconName, baseCls, specificCls, size, ...others
}) => (
    <span
        className={
            `${iconName} ${baseCls} ${specificCls} ${size}`
        }
        { ...others }
    />
);