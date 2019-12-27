 import React from 'react';
 import './CoffeeTreatsCompStyle.css'

 class CoffeeTeaComp extends React.Component {
     render() {
         return (
             <div className='compStyle'>
             <tr>
                <td className="column-lg-12">
                    {this.props.coffee.id}
                </td>
            </tr> 
            <tr>
                <td className="column-lg-8">{this.props.coffee.summary}</td>
                <td className="column-lg-4">{this.props.coffee.price}</td>
            </tr>
                <br></br>
                </div>
         )
     }
 }
 export default CoffeeTeaComp;