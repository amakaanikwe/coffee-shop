import React from 'react';
// import './App.css';
import CoffeeTeaComp from './CoffeeTeaComp.jsx';
import TreatsComp from './TreatsComp.jsx';

class MenuComp extends React.Component{
      
    render () {
      return (
        <div>
          <div>Coffee</div>
          <table>
            <tbody>
                {this.props.menu.coffee.map((item, i) => <CoffeeTeaComp key = {i} coffee = {item} />)}
            </tbody>
          </table>
          <div>Treats</div>
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