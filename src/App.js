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
      turnToggleOn: true,
      coffee : [
        {
          id:'Single Drip',
          summary: "Choice of house blend or rotating single-origin drip coffee; decaf available on request",
          price: "5"
        },
        {
          id:'Pour-Over',
          summary: "Pour-over of rotating single-origin coffee",
          price: "5"
        },
        {
          id:'Cafe Au Lait',
          summary: "Choice of drip coffee with steamed milk on top",
          price: "5"
        },
        {
          id:'Black Tea',
          summary: "Assortment of Black Teas",
          price: "4"
        },
        {
          id:'Green Tea',
          summary: "Assortment of Green Teas",
          price: "3"
        }   
      ],
      treats : [
        {
          id:'Bread Basket',
          summary: "Assortment of fresh baked fruit breads and muffins",
          price: "5"
        },
        {
          id:'Granola',
          summary: "Natural cereal of honey toasted oats, raisins, almonds and dates",
          price: "8"
        },
        {
          id:'Belgian Waffle',
          summary: "Vanilla flavored batter with malted flour",
          price: "11"
        },
        {
          id:'Scrambled eggs',
          summary: "Scrambled eggs, roasted red pepper and garlic, with green onions",
          price: "8"
        },
        {
          id:'Blueberry Pancakes',
          summary: "With syrup, butter and lots of berries",
          price: "9"
        } 
      ],
    }; 
    
    this.handleClick = this.handleClick.bind(this);
    
  }

  handleClick() {
    this.setState(prevState => ({
      turnToggleOn: !prevState.turnToggleOn
    }));
  }
  // onClick={}
  render () {
    return (
      <div>
        {/* <MenuComp menu = {this.state} />
        <OrderComp menu = {this.state} /> */}
        <div>
          {this.state.turnToggleOn ? <MenuComp menu = {this.state} /> : <OrderComp menu = {this.state} />}
        </div>
        <button onClick={this.handleClick}> 
            Order Now
          </button>
      </div>
    )
  }

};

export default App;
