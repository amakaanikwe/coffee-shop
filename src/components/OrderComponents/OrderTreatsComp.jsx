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
                <td><IncrementButtonComp/></td>
            </tr>
            <br></br>
        </React.Fragment>
        )
    }
}

export default OrderTreatsComp;