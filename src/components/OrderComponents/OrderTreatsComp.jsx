import React from 'react';
import IncrementButtonComp from './IncrementButtonComp.jsx'

class OrderTreatsComp extends React.Component {
    render() {
        return (
            <div>
            <tr>
                <td>{this.props.treats.id}</td>
            </tr>
            <tr>
                <td>{this.props.treats.summary}</td>
                <td>{this.props.treats.price}</td>
                <td><IncrementButtonComp/></td>
            </tr>
            <br></br>
        </div>
        )
    }
}

export default OrderTreatsComp;