import React from 'react';
import IncrementButtonComp from './IncrementButtonComp.jsx'

class OrderCoffeeComp extends React.Component {
    render() {
        return (
            <div>
               <tr>
                   <td>{this.props.coffee.id}</td>
               </tr>
               <tr>
                   <td>{this.props.coffee.summary}</td>
                   <td>{this.props.coffee.price}</td>
                   <td><IncrementButtonComp/></td>
               </tr>
              
           </div>
        )
    }
}
export default OrderCoffeeComp;