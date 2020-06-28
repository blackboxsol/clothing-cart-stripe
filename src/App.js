import React from 'react';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';

import  HomePage  from './pages/homepage/homepage.component';

const HatsPage = (props) => (
 
  <div>
  <br></br>
    <Link to='/' >Back To Home</Link>
    <br/>
    <br/>
    <button onClick={()=> props.history.push('/')}>Back To Home</button>
    <h1>Hats are out of sale, so Hat is not available { props.match.params.hatId}</h1>
    { console.log(props)}
  </div>
)

function App() {
  return <div>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/boutique-clothing" component={HomePage} />
      <Route exact path="/shop/hats" component={HatsPage} />
      <Route exact path="/hats/:hatId" component={HatsPage} />
    </Switch>
  </div>
}

export default App;
