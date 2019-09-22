import React from 'react';

class TreatsComp extends React.Component {
    render() {
        return (
           <tr>
               <td>{this.props.treats.id}</td>
               <td>{this.props.treats.summary}</td>
           </tr>
        )
    }
}
export default TreatsComp;