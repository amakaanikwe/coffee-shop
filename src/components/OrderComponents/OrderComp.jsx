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
                {this.props.menu.coffee.map((coffeeItem, i) => <OrderCoffeeComp key = {i} coffeeItem = {coffeeItem} />)}
            </tbody>
          </table>
          <div>Treats</div>
          <table>
            <tbody>
                {this.props.menu.treats.map((item, i) => <OrderTreatsComp key = {i} treats = {item} />)}
            </tbody>
          </table>
          <button>Place Order</button>
        </div>
      )
    }
  
  };
  
  export default OrderComp;