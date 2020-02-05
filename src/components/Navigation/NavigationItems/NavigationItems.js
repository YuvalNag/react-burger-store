import React from 'react';
import classes from './NavigationItems.module.css'
import NavgationItem from './NavigationItem/NavigationItem'

const navigationItems = () => (
    <ul className={classes.NavgationItems}>
        <NavgationItem  link='/burger-builder'> Burger Builder</NavgationItem>
        <NavgationItem  link='/orders'>Orders</NavgationItem>
    </ul>
)

export default navigationItems