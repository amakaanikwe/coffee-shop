import React from 'react';


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
                    <button onClick={()=>this.props.onTreatsDecrement(this.props.treatsItem)} className='glyphicon glyphicon-menu-down'>
                    </button>
                </td>
                <td>{this.props.treatsItem.value}</td>
                       
            </tr>
            <br></br>
        </React.Fragment>
        )
    }
}

export default OrderTreatsComp;