import React, {Components} from 'react';

class IncrementButtonComp
 extends React.Component {
    render() { 
        return ( 
            <div>
                <button className='glyphicon glyphicon-menu-up'>
                </button>
                <div>{}</div>
                <button className='glyphicon glyphicon-menu-down'>
                </button>
            </div>
         );
    }
}
 
export default IncrementButtonComp
;