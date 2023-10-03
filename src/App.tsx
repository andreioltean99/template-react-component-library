import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import { History } from 'history';
import Landing from './components/Landing';
import Pricing from './components/Pricing';

interface AppProps {
  history: History
}

const App: React.FC<AppProps> = ({ history }) => {
  console.log(history);
  return (
    <div>
      Hello React!
      <Router history={history}>
        <Switch>
          <Route path="/pricing" component={Pricing} />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

