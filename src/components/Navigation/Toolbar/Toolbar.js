import React from 'react';
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Button from '../../UI/Button/Button'
const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div className={classes.PhoneOnly}>
            <Button clicked={props.managedSideDrawer}>MENU</Button>
        </div>
        <div className={classes.Logo} >
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar;