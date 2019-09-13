import React from 'react';
import './App.css';
import './components';

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      menu : [
        {
          id: 'Single Drip',
          summmary: "Choice of house blend or rotating single-origin drip coffee; decaf available on request $5"
        },
        {
          id:'Pour-Over',
          summary: "Pour-over of rotating single-origin coffee $5.5"
        },
        {
          id:'Cafe Au Lait',
          summary: "hoice of drip coffee with steamed milk on top $5.5"
        },
        {
          id:'Black Tea',
          summary: "Assortment of Black Teas $3"
        },
        {
          id:'Green Tea',
          summary: "Assortment of Green Teas $3"
        },
        {
          id:'Bread Basket',
          summary: "ssortment of fresh baked fruit breads and muffins $5.5"
        },
        {
          id:'Granola',
          summary: "Natural cereal of honey toasted oats, raisins, almonds and dates $8"
        },
        {
          id:'Belgian Waffle',
          summary: "Vanilla flavored batter with malted flour $10.5"
        }  
        
      ]
    };
  }

};

export default App;
