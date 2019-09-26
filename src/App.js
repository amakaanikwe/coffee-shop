import React from 'react';
import './App.css';
import CoffeeTeaComp from './components/CoffeeTeaComp.jsx';
import TreatsComp from './components/TreatsComp.jsx';

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
     

    };  
  }
  
  render () {
    return (
      <div>
        <table>
          <tbody>
              {this.state.coffee.map((item, i) => <CoffeeTeaComp key = {i} coffee = {item} />)}
          </tbody>
        </table>
        <table>
          <tbody>
              {this.state.treats.map((item, i) => <TreatsComp key = {i} treats = {item} />)}
          </tbody>
        </table>
      </div>
    )
  }

};

export default App;
