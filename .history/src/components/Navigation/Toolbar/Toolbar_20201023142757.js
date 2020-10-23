import React from 'react';
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div className={classes.PhoneOnly}>
            <IconButton style={{color:'white'}} onClick={props.managedSideDrawer}><MenuIcon /></IconButton >
        </div>
        <div className={classes.Logo} >
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems logoutClicked={props.logoutClicked} isAuth={props.isAuth} />
        </nav>
    </header>
)

export default toolbar;