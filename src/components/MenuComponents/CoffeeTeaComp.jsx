 import React from 'react';
 import './CoffeeTreatsCompStyle.css'

 class CoffeeTeaComp extends React.Component {
     render() {
         return (
             <div className='compStyle'>
             <tr className='row'>
                <td className="col-sm-12">
                    {this.props.coffee.id}
                </td>
            </tr> 
            <tr className='row'>
                <td className="col-sm-10">{this.props.coffee.summary}</td>
                <td className="col-sm-2">{this.props.coffee.price}</td>
            </tr>
                <br></br>
            </div>
         )
     }
 }
 export default CoffeeTeaComp;