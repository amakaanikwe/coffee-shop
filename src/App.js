import React from 'react';
import './App.css';
import MenuComp from './components/MenuComponents/MenuComp.jsx';
import OrderComp from './components/OrderComponents/OrderComp.jsx';
import coffeedata from './inventory/coffeedata.json';
import treatsdata from './inventory/treatsdata.json';
import { tsImportEqualsDeclaration } from '@babel/types';

// let cooffeedata = require('./inventory/coffeedata.json');


class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      turnCompToggleOn: true,
      coffee : coffeedata,
      treats : treatsdata,
    }; 
    
    this.handleCompToggle = this.handleCompToggle.bind(this);

  }

  // Order Coffee counters
  handleCoffeeIncrement = coffeeItem => {
    const coffee = [...this.state.coffee];
    const index = coffee.indexOf(coffeeItem);
    coffee[index] = {...coffeeItem};
    coffee[index].value++;
    this.setState({ coffee })
  };

  handleCoffeeDecrement = coffeeItem => {
    const coffee = [...this.state.coffee];
    const index = coffee.indexOf(coffeeItem);
    coffee[index] = {...coffeeItem};
    coffee[index].value--;
    this.setState({ coffee })
  };

  // Order Treats Counters
  handleTreatsIncrement = treatsItem => {
    const treats = [...this.state.treats];
    const index = treats.indexOf(treatsItem);
    treats[index] = {...treatsItem};
    treats[index].value++;
    this.setState({ treats })
  }

  handleTreatsDecrement = treatsItem => {
    const treats = [...this.state.treats];
    const index = treats.indexOf(treatsItem);
    treats[index] = {...treatsItem};
    treats[index].value--;
    this.setState({ treats })
  }

  // Component Toggle
  handleCompToggle() {
    this.setState(prevState => ({
      turnCompToggleOn: !prevState.turnCompToggleOn
    }));
  }

  render () {
    return (
      <div>

        <div>
          {this.state.turnCompToggleOn ? <MenuComp menu = {this.state} onCompToggle = {this.handleCompToggle} /> : <OrderComp 
          menu = {this.state} 
          onCoffeeIncrement = {this.handleCoffeeIncrement} 
          onCoffeeDecrement = {this.handleCoffeeDecrement} 
          onTreatsIncrement = {this.handleTreatsIncrement} 
          onTreatsDecrement = {this.handleTreatsDecrement} 
          onCompToggle = {this.handleCompToggle} />}
        </div>
      </div>
    )
  }

};

export default App;
