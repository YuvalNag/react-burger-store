import React /*,{useState,useEffect}*/ from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import Layout from "./containers/Layout/Layout"
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder"
import Checkout from './containers/Checkout/Checkout'
import Orders from './containers/Orders/Orders'

import { initPrices, autoLogin } from './store/actions'
import Auth from './containers/Auth/Auth';


function App(props) {

  // const [show,setShow] = useState(true)

  props.onInitPrices()
  props.onAutoLogin()


  return (
    <BrowserRouter>
      <div>
        <Layout>
          <Switch>
            <Route path='/auth' component={Auth} />
            <Route path='/burger-builder' component={BurgerBuilder} />
            <Route path='/checkout' component={Checkout} />
            {props.isAuth ? <Route path='/orders' component={Orders} /> : null}
            <Redirect from='/' to='/burger-builder' />
          </Switch>
        </Layout>
      </div>
    </BrowserRouter>
  );
}
const mapStateToProps = state => {
  return {
    isAuth: state.auth.idToken !== null
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onInitPrices: () => dispatch(initPrices()),
    onAutoLogin: () => dispatch(autoLogin())

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
