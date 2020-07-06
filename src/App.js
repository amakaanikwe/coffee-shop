import React from "react";
import MenuComp from "./components/MenuComponents/MenuComp.jsx";
import OrderComp from "./components/OrderComponents/OrderComp.jsx";
import coffeedata from "./inventory/coffeedata.json";
import treatsdata from "./inventory/treatsdata.json";

// let cooffeedata = require('./inventory/coffeedata.json');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      turnCompToggleOn: true,
      coffee: coffeedata,
      treats: treatsdata,
    };

    this.handleCompToggle = this.handleCompToggle.bind(this);
  }

  // Order Increment Counters
  handleCoffeeIncrement = (coffeeItem) => {
    const coffee = [...this.state.coffee ];
    const index = coffee.indexOf(coffeeItem);
    coffee[index] = { ...coffeeItem };
    coffee[index].value++;
    console.log(coffee);
    this.setState({ coffee });
  };

  handleTreatsIncrement = (treatsItem) => {
    const treats = [...this.state.treats];
    const index = treats.indexOf(treatsItem);
    treats[index] = { ...treatsItem };
    treats[index].value++;
    this.setState({ treats });
  };

  // Order Decrement Counters
  handleCoffeeDecrement = (item) => {
    const coffee = [...this.state.coffee];
    const index = coffee.indexOf(item);
    coffee[index] = { ...item };
    if (coffee[index].value >= 0) {
      coffee[index].value--;
    } else {coffee[index].value = 0 };
    this.setState({ coffee });
  };

  handleTreatsDecrement = (item) => {
    const treats = [...this.state.treats];
    const index = treats.indexOf(item);
    treats[index] = { ...item };
    treats[index].value--;
    if (treats[index].value >= 0) {
      treats[index].value--;
    } else {treats[index].value = 0 };
    this.setState({ treats });
  };


  // Component Toggle
  handleCompToggle() {
    this.setState((prevState) => ({
      turnCompToggleOn: !prevState.turnCompToggleOn,
    }));
  }

  render() {
    return (
      <div>
        <div>
          {this.state.turnCompToggleOn ? (
            <MenuComp menu={this.state} onCompToggle={this.handleCompToggle} />
          ) : (
            <OrderComp
              menu={this.state}
              onCoffeeIncrement={this.handleCoffeeIncrement}
              onCoffeeDecrement={this.handleCoffeeDecrement}
              onTreatsIncrement={this.handleTreatsIncrement}
              onTreatsDecrement={this.handleTreatsDecrement}
              onCompToggle={this.handleCompToggle}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
