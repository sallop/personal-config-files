//require("./style.css");
import React, { PropTypes } from 'react';
import {browserHistory, Router, Route} from 'react-router';
import ReactDOM from 'react-dom';
import makeRoutes from './routes';

const Home = React.createClass({
  render: function() {
    return (<div>Hello world</div>);
  }
});

const routes = makeRoutes();
//const routes = (
//    <Router>
//      <Route path="/" component={Home} />
//    </Router>
//);


class App extends React.Component {
  static propTypes = {
    routes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }
  // class getter
  get content(){
    //return "Bob is dead. Because of us.";
    //return (<Router history={this.props.history} />);
    return (<Router
        routes={this.props.routes}
        history={this.props.history} />);
  }

  render(){
    return (
      <div style={{ height: '100%', color:'blue' }}>
        { this.content }
      </div>
    );
  }
}

ReactDOM.render(<App history={browserHistory} routes={routes} />,
    document.getElementById('world'));

module.exports = App;
