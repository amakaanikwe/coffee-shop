 import React from 'react';

 class CoffeeTeaComp extends React.Component {
     render() {
         return (
            <tr>
                <td>{this.props.coffee.id}</td>
                <td>{this.props.coffee.summary}</td>
            </tr>
         )
     }
 }
 export default CoffeeTeaComp;