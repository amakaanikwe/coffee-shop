import React from 'react';

class TreatsComp extends React.Component {
    render() {
        return (
            <div>
            <tr>
                <td>{this.props.treats.id}</td>
            </tr>
            <tr>
                <td>{this.props.treats.summary}</td>
                <td className='m-2'>{this.props.treats.price}</td>
            </tr>
            <br></br>
        </div>
        )
    }
}

export default TreatsComp;