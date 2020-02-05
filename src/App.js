import React /*,{useState,useEffect}*/ from 'react';
import Layout from "./containers/Layout/Layout"
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder"
import Checkout from './containers/Checkout/Checkout'
import Orders from './containers/Orders/Orders'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  // const [show,setShow] = useState(true)
  // useEffect(()=>{ setTimeout(()=>{setShow(false)},4000)})
  return (
    <BrowserRouter>
      <div>
        <Layout>
          {/* {show?<BurgerBuilder/>:null} */}
          <Switch>
            <Route path='/burger-builder' component={BurgerBuilder} />
            <Route path='/checkout' component={Checkout} />
            <Route path='/orders' component={Orders} />
            <Redirect from='/' to='/burger-builder'/> 
          </Switch>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
