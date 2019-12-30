import React from 'react';
import './OrderCompStyle.css';

class OrderCoffeeComp extends React.Component {
    render() {
        return (
            <div className='style'>
               <tr className='row'>
                   <td className="col-sm-12">{this.props.coffeeItem.id}</td>
               </tr>
               <tr className='row'>
                   <td className="col-sm-9">{this.props.coffeeItem.summary}</td>
                   <td className="col-sm-1">{this.props.coffeeItem.price}</td>
                   <td className='col-sm-1 buttonStyle'>
                       <button onClick={()=>this.props.onCoffeeIncrement(this.props.coffeeItem)} className='glyphicon glyphicon-menu-up'>
                        </button>
                        <button onClick={()=>this.props.onCoffeeDecrement(this.props.coffeeItem)} className='glyphicon glyphicon-menu-down'>
                        </button>
                    </td>
                    <td className="col-sm-1">{this.props.coffeeItem.value}</td>
                    
               </tr>
              
           </div>
        )
    }
}
export default OrderCoffeeComp;