import React, {Components} from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                count: 0,
                tags: ['tag1', 'tag2', 'tag3']
            };

    };

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1})
    };

    render () {
        return(
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                onClick={this.handleIncrement}
                className='btn btn-secondary btn-sm'>Increment</button>
                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? 'warning' : 'primary';
        return classes;
    }

    // formatCount() {
    //     ...
    // }



}

export default Counter;