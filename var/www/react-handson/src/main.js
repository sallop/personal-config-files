//require("./style.css");
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render(){
    var NODE_ENV = "hello world";
    return (
        <div className="helloWorld">
          <h1>
            <i className="fa fa-star"></i>
            Environment: { NODE_ENV }
          </h1>
        </div>
    );
  }
}

() => { console.log("Hello World"); }

//ReactDOM.render(<World/>, document.getElementById('world'));
module.exports = App;
