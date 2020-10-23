import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        {/* <NavigationItem link='/burger-builder'> Burger Builder</NavigationItem> */}
        <NavigationItem link='/catalog'>חנות</NavigationItem>

        {props.isAuth
            ? [<NavigationItem key='orders' link='/admin'>מנהל</NavigationItem>,/*<NavigationItem key='orders' link='/orders'>Orders</NavigationItem>,*/
            <NavigationItem key='logout' link='/' exact ><div onClick={props.logoutClicked} > התנתק</div></NavigationItem>]
            : <NavigationItem link='/auth'>התחבר</NavigationItem>
        }
    </ul>
)

export default navigationItems