import React from 'react';
import './App.css';
import CoffeeTeaComp from './components/CoffeeTeaComp.jsx';
import TreatsComp from './components/TreatsComp.jsx';

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
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
          summary: "hoice of drip coffee with steamed milk on top",
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
          summary: "ssortment of fresh baked fruit breads and muffins",
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
      ]
    };  
  }
  
  render () {
    return (
      <div>
        <table>
          <tbody>
              {this.state.coffee.map((item, i) => <CoffeeTeaComp key = {i} coffee = {item} />)}
          </tbody>
        </table>
        <table>
          <tbody>
              {this.state.treats.map((item, i) => <TreatsComp key = {i} treats = {item} />)}
          </tbody>
        </table>
        <button>
          Order Now
        </button>
      </div>
    )
  }

};

export default App;
