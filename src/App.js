import React, { Component } from 'react';
import Home from './containers/Home/Home';
import OrderDetails from './containers/OrderDetails/OrderDetails'
import { BrowserRouter, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/order/:id" component={OrderDetails} />
          <Route path="/" exact component={Home} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;