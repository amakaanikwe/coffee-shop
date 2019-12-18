import React from 'react';
import './App.css';
import MenuComp from './components/MenuComponents/MenuComp.jsx';
import OrderComp from './components/OrderComponents/OrderComp.jsx';
import { tsImportEqualsDeclaration } from '@babel/types';
// import Counters from './components/OrderComponents/Counters.jsx';

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      turnCompToggleOn: true,
      coffee : [
        {
          id:'Single Drip',
          summary: "Choice of house blend or rotating single-origin drip coffee; decaf available on request",
          price: "5",
          value: 0
        },
        {
          id:'Pour-Over',
          summary: "Pour-over of rotating single-origin coffee",
          price: "5",
          value: 0
        },
        {
          id:'Cafe Au Lait',
          summary: "Choice of drip coffee with steamed milk on top",
          price: "5",
          value: 0
        },
        {
          id:'Black Tea',
          summary: "Assortment of Black Teas",
          price: "4",
          value: 0
        },
        {
          id:'Green Tea',
          summary: "Assortment of Green Teas",
          price: "3",
          value: 0
        }   
      ],
      treats : [
        {
          id:'Bread Basket',
          summary: "Assortment of fresh baked fruit breads and muffins",
          price: "5",
          value: 0
        },
        {
          id:'Granola',
          summary: "Natural cereal of honey toasted oats, raisins, almonds and dates",
          price: "8",
          value: 0
        },
        {
          id:'Belgian Waffle',
          summary: "Vanilla flavored batter with malted flour",
          price: "11",
          value: 0
        },
        {
          id:'Scrambled eggs',
          summary: "Scrambled eggs, roasted red pepper and garlic, with green onions",
          price: "8",
          value: 0
        },
        {
          id:'Blueberry Pancakes',
          summary: "With syrup, butter and lots of berries",
          price: "9",
          value: 0
        } 
      ],
    }; 
    
    this.handleCompToggle = this.handleCompToggle.bind(this);

  }

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
          {this.state.turnCompToggleOn ? <MenuComp menu = {this.state} onCompToggle = {this.handleCompToggle} /> : <OrderComp menu = {this.state} onCoffeeIncrement = {this.handleCoffeeIncrement}onCoffeeDecrement = {this.handleCoffeeDecrement} onTreatsIncrement = {this.handleTreatsIncrement} onTreatsDecrement = {this.handleTreatsDecrement} />}
        </div>
        {/* <button onClick={this.handleClick}> 
        {this.state.turnCompToggleOn ? 'Order Now' : 'Back to Menu'}
          </button> */}
      </div>
    )
  }

};

export default App;
