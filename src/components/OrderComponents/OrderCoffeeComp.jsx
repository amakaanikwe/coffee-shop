import React from 'react';
import IncrementButtonComp from './IncrementButtonComp.jsx'

class OrderCoffeeComp extends React.Component {
    render() {
        return (
            <div>
               <tr>
                   <td>{this.props.coffeeItem.id}</td>
               </tr>
               <tr>
                   <td>{this.props.coffeeItem.summary}</td>
                   <td>{this.props.coffeeItem.price}</td>
                   <td><IncrementButtonComp/></td>
               </tr>
              
           </div>
        )
    }
}
export default OrderCoffeeComp;