import React from 'react'

export const TopBarLogo = ({
    history
}) => (
    <div
      className='top-bar-logo'
      onClick={ e => history.push('/') }
    />
);

export const TopMenuItem = ({
    history,
    location,
    path,
    text
}) => {
    const iAm = location.pathname === path;
    return (
        <div
            className={ `top-menu-item ${ iAm ? 'selected' : '' }` }
            onClick={ e => !iAm && history.push(path) }
        >
            { text }
        </div>
    );
}