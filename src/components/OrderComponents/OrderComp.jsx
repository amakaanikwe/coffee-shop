import React from 'react';
import OrderCoffeeComp from './OrderCoffeeComp.jsx';
import OrderTreatsComp from './OrderTreatsComp.jsx';

class OrderComp extends React.Component{
      
    render () {
      return (
        <div className="container-fluid menuStyle">
          <div>Coffee & Tea</div>
          <br></br>
          <table className='row'>
            <tbody className='col-sm-12'>
                {this.props.menu.coffee.map((coffeeItem, i) => <OrderCoffeeComp key = {i} coffeeItem = {coffeeItem} onCoffeeIncrement = {this.props.onCoffeeIncrement} onCoffeeDecrement = {this.props.onCoffeeDecrement}  />)}
            </tbody>
          </table>
          <br></br>
          <div>Treats</div>
          <br></br>
          <table className='row'>
            <tbody className='col-sm-12'>
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