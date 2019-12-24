 import React from 'react';

 class CoffeeTeaComp extends React.Component {
     render() {
         return (
             <React.Fragment>
             <tr>
                <td class="column-lg-12">
                    {this.props.coffee.id}
                </td>
            </tr> 
            <tr>
                <td class="column-lg-8">{this.props.coffee.summary}</td>
                <td class="column-lg-4">{this.props.coffee.price}</td>
            </tr>
                <br></br>
                </React.Fragment>
         )
     }
 }
 export default CoffeeTeaComp;