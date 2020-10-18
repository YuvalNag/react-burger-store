import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import Layout from "./containers/Layout/Layout"
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder"
import Spinner from './components/UI/Spinner/Spinner';


import { initPrices, autoLogin } from './store/actions'
import Auth from './containers/Auth/Auth';
import Catalog from './containers/Catalog/Catalog';

const Orders = lazy(() => import('./containers/Orders/Orders'))
const Checkout = lazy(() => import('./containers/Checkout/Checkout'))
const App = (props) => {

  // const [show,setShow] = useState(true)

  props.onInitPrices()
  props.onAutoLogin()


  return (
    <BrowserRouter>
      <Suspense fallback={Spinner}>

        <div>
          <Layout>
            <Switch>
              <Route path='/auth' component={Auth} />
              <Route path='/catalog' component={Catalog} />
              <Route path='/checkout' component={Checkout} />
              {props.isAuth ? <Route path='/orders' component={Orders} /> : null}
              <Redirect from='/' to='/catalog' />
            </Switch>
          </Layout>
        </div>
      </Suspense>

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
