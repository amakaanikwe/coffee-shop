import React from 'react';
import OrderCoffeeComp from './OrderCoffeeComp.jsx';
import OrderTreatsComp from './OrderTreatsComp.jsx';

class OrderComp extends React.Component{
      
    render () {
      return (
        <div>
          <div>Coffee & Tea</div>
          <table>
            <tbody>
                {this.props.menu.coffee.map((item, i) => <OrderCoffeeComp key = {i} coffee = {item} />)}
            </tbody>
          </table>
          <div>Treats</div>
          <table>
            <tbody>
                {this.props.menu.treats.map((item, i) => <OrderTreatsComp key = {i} treats = {item} />)}
            </tbody>
          </table>
          {/* <Counters /> */}
        </div>
      )
    }
  
  };
  
  export default OrderComp;