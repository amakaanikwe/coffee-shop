 import React from 'react';

 class MenuComponent extends React.Component {
     render() {
         return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
         )
     }
 }
 export default MenuComponent;