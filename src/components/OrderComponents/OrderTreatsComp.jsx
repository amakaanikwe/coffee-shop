import React from 'react';
import './OrderCompStyle.css';


class OrderTreatsComp extends React.Component {
    render() {
        return (
            <div className='style'>
            <tr className='row'>
                <td className="col-sm-12">{this.props.treatsItem.id}</td>
            </tr>
            <tr className='row'>
                <td className="col-sm-9">{this.props.treatsItem.summary}</td>
                <td className="col-sm-1 priceStyle">{this.props.treatsItem.price}</td>
                <td className="col-sm-1 buttonStyle">                
                    <button onClick={()=>this.props.onTreatsIncrement(this.props.treatsItem)} className='glyphicon glyphicon-menu-up'>
                    </button>
                    <button onClick={()=>this.props.onTreatsDecrement(this.props.treatsItem)} className='glyphicon glyphicon-menu-down '>
                    </button>
                </td>
                <td className="col-sm-1 itemNumStyle">{this.props.treatsItem.value}</td>
                       
            </tr>
            <br></br>
        </div>
        )
    }
}

export default OrderTreatsComp;