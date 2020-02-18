import React, { Fragment, Component } from "react";
import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

import * as actions from '../../store/actions'
import { connect } from "react-redux";


class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        });
    }
    render() {
        return (
            <Fragment>
                <Toolbar logoutClicked={this.props.onLogout} isAuth={this.props.isAuth} managedSideDrawer={this.sideDrawerToggleHandler} />
                <SideDrawer logoutClicked={this.props.onLogout} isAuth={this.props.isAuth} show={this.state.showSideDrawer} managedSideDrawer={this.sideDrawerToggleHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Fragment >
        )
    }
}
const mapStateToProps = state => {
    return {
        isAuth: state.auth.idToken !== null
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Layout)