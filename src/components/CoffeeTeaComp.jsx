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
                </tr>
                <br></br>
            </div>
         )
     }
 }
 export default CoffeeTeaComp;