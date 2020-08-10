import React from "react";
import MenuComp from "./components/MenuComponents/MenuComp.jsx";
import OrderComp from "./components/OrderComponents/OrderComp.jsx";
import { useSelector} from "react-redux";


const App = () =>{
    const turnCompToggleOn = useSelector (state => state.turnCompToggleOn);


  // Order Decrement Counters
  // handleCoffeeDecrement = (item) => {
  //   const coffee = [...this.state.coffee];
  //   const index = coffee.indexOf(item);
  //   coffee[index] = { ...item };
  //   if (coffee[index].value >= 0) {
  //     coffee[index].value--;
  //   } else {coffee[index].value = 0 };
  //   this.setState({ coffee });
  // };

  // handleTreatsDecrement = (item) => {
  //   const treats = [...this.state.treats];
  //   const index = treats.indexOf(item);
  //   treats[index] = { ...item };
  //   treats[index].value--;
  //   if (treats[index].value >= 0) {
  //     treats[index].value--;
  //   } else {treats[index].value = 0 };
  //   this.setState({ treats });
  // };


    return (
        <div>
          {turnCompToggleOn ? (
            <MenuComp />
          ) : (
            <OrderComp />
          )}
        </div>
    );

}

export default App;
