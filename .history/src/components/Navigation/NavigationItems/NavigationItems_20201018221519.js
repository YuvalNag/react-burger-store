import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        {/* <NavigationItem link='/burger-builder'> Burger Builder</NavigationItem> */}
        <NavigationItem link='/catalog'>Catalog</NavigationItem>

        {props.isAuth
            ? [<NavigationItem key='orders' link='/admin'>Admin</NavigationItem>,<NavigationItem key='orders' link='/orders'>Orders</NavigationItem>,
            <NavigationItem key='logout' link='/' exact ><div onClick={props.logoutClicked} > Logout</div></NavigationItem>]
            : <NavigationItem link='/auth'>Login</NavigationItem>
        }
    </ul>
)

export default navigationItems