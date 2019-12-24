import React from 'react';
import CoffeeTeaComp from './CoffeeTeaComp.jsx';
import TreatsComp from './TreatsComp.jsx';

class MenuComp extends React.Component{
      
    render () {
      return (
        <div class="container-fluid">
          <div>Coffee & Tea</div>
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
          <button onClick={()=>this.props.onCompToggle()}> 
        {!this.props.turnCompToggleOn ? 'Order Now' : 'Back to Menu'}
          </button>
        </div>
      )
    }
  
  };
  
  export default MenuComp;