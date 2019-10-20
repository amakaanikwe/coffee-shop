 import React from 'react';

 class CoffeeTeaComp extends React.Component {
     render() {
         return (
             <div>
                <tr>
                    <td>{this.props.coffee.id}</td>
                </tr>
                <tr>
                    <td>{this.props.coffee.summary}</td>
                    <td>{this.props.coffee.price}</td>
                </tr>
                <br></br>
            </div>
         )
     }
 }
 export default CoffeeTeaComp;