import React from 'react';
import './OrderCompStyle.css';

class OrderCoffeeComp extends React.Component {
    render() {
        return (
            <div className='style'>
               <tr>
                   <td>{this.props.coffeeItem.id}</td>
               </tr>
               <tr>
                   <td>{this.props.coffeeItem.summary}</td>
                   <td>{this.props.coffeeItem.price}</td>
                   <td className='buttonStyle'>
                       <button onClick={()=>this.props.onCoffeeIncrement(this.props.coffeeItem)} className='glyphicon glyphicon-menu-up'>
                        </button>
                        <button onClick={()=>this.props.onCoffeeDecrement(this.props.coffeeItem)} className='glyphicon glyphicon-menu-down'>
                        </button>
                    </td>
                    <td>{this.props.coffeeItem.value}</td>
                    
               </tr>
              
           </div>
        )
    }
}
export default OrderCoffeeComp;