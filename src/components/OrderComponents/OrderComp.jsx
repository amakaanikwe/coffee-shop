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
                {this.props.menu.coffee.map((coffeeItem, i) => <OrderCoffeeComp key = {i} coffeeItem = {coffeeItem} onCoffeeIncrement = {this.props.onCoffeeIncrement} onCoffeeDecrement = {this.props.onCoffeeDecrement}  />)}
            </tbody>
          </table>
          <div>Treats</div>
          <table>
            <tbody>
                {this.props.menu.treats.map((treatsItem, i) => <OrderTreatsComp key = {i} treatsItem = {treatsItem} onTreatsIncrement = {this.props.onTreatsIncrement} onTreatsDecrement = {this.props.onTreatsDecrement} />)}
            </tbody>
          </table>
          <button onClick={()=>this.props.onCompToggle()}> 
        {this.props.turnCompToggleOn ? 'Order Now' : 'Back to Menu'}
          </button>
          <button>Place Order</button>
        </div>
      )
    }
  
  };
  
  export default OrderComp;