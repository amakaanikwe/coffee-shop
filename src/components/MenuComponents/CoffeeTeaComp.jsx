 import React from 'react';

 class CoffeeTeaComp extends React.Component {
     render() {
         return (
             <div class="row">
                <tr class="column-sm-12">
                    <td>{this.props.coffee.id}</td>
                </tr>
                <tr class="colum-sm-12">
                    <td>{this.props.coffee.summary}</td>
                    <td>{this.props.coffee.price}</td>
                </tr>
                <br></br>
            </div>
         )
     }
 }
 export default CoffeeTeaComp;