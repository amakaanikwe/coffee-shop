import React from 'react';
import IncrementButtonComp from './IncrementButtonComp.jsx'

class OrderTreatsComp extends React.Component {
    render() {
        return (
            <React.Fragment>
            <tr>
                <td>{this.props.treatsItem.id}</td>
            </tr>
            <tr>
                <td>{this.props.treatsItem.summary}</td>
                <td>{this.props.treatsItem.price}</td>
                <td>                
                    <button onClick={()=>this.props.onTreatsIncrement(this.props.treatsItem)} className='glyphicon glyphicon-menu-up'>
                    </button>
                    <button className='glyphicon glyphicon-menu-down'>
                    </button>
                    <div>{this.props.treatsItem.value}</div>
                </td>
            </tr>
            <br></br>
        </React.Fragment>
        )
    }
}

export default OrderTreatsComp;