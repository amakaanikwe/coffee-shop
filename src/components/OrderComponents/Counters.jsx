import React, {Components} from 'react';
import Counter from './Counter.jsx.js.js';

class Counters extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                counter: [
                    { id: 1, value:0},
                    { id: 2, value:0},
                    { id: 3, value:0},
                    { id: 4, value:0},
                    { id: 5, value:0}
                ]
            }
    }

 render() {
     return (
         <div>
             {this.state.counters.map(counter => 
            //  value and selected can be read through props. 1.23.23
             <Counter key={counter.id} value={counter.value} selected={true} />)}
         </div>
     );
 };
}

export default Counters;