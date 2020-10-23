import React from 'react';
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Button from '../../UI/Button/Button'
import MenuIcon from '@material-ui/icons/Menu';
const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div className={classes.PhoneOnly}>
            <Button clicked={props.managedSideDrawer}><MenuIcon /></Button>
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