import React from 'react';
// import './App.css';
import CoffeeTeaComp from './CoffeeTeaComp.jsx.js';
import TreatsComp from './TreatsComp.jsx.js';

class MenuComp extends React.Component{
      
    render () {
      return (
        <div>
          <table>
            <tbody>
                {this.props.menu.coffee.map((item, i) => <CoffeeTeaComp key = {i} coffee = {item} />)}
            </tbody>
          </table>
          <table>
            <tbody>
                {this.props.menu.treats.map((item, i) => <TreatsComp key = {i} treats = {item} />)}
            </tbody>
          </table>
          <button>
            Order Now
          </button>
          {/* <Counters /> */}
        </div>
      )
    }
  
  };
  
  export default MenuComp;