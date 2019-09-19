 import React from 'react';

 class MenuComponent extends React.Component {
     render() {
         return (
            <tr>
                <td>{this.props.menu.id}</td>
                <td>{this.props.menu.summary}</td>
            </tr>
         )
     }
 }
 export default MenuComponent;