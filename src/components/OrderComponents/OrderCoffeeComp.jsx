import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {COFFEE_INCREASE, COFFEE_DECREASE} from "../../redux/actions.js";
import "../../css/OrderCompStyle.css";

const OrderCoffeeComp = (coffee) => {
  
  const coffeeMenu = useSelector(state => state.coffeeMenu);
  const dispatch = useDispatch();
  const formatCount = () => {
    // return this.state.count === 0 ? 'zero' : this.state.count;
    // jsx expressions can be used the same way as objects
    const value  = coffeeMenu[0].value;
    return (value === 0) | (value <= 0) ? "0" : value;
  }

  function incrimentCoffeeCout (value){
    dispatch({
      type: COFFEE_INCREASE,
    })

  }

  function decrementCoffeeCout (value){
    dispatch({
      type: COFFEE_DECREASE,
    })   
  }

    return (
      <>
        <tr className="row style">
          <td className="col-sm-12">{coffee.coffee.id}</td>
        </tr>
        <tr className="row">
          <td className="col-sm-9">{coffee.coffee.summary}</td>
          <td className="col-sm-1 priceStyle">{coffee.coffee.price}</td>
          <td className="col-sm-1 btn-group-vertical buttonStyle">
            <div className="btn-group-vertical">
              <button
                onClick={() => {incrimentCoffeeCout()}}
                className="glyphicon glyphicon-menu-up"
              ></button>
              <button
                onClick={() =>{decrementCoffeeCout()} }
                className="glyphicon glyphicon-menu-down"
              ></button>
            </div>
          </td>
          <td className="col-sm-1 itemNumStyle">
            <span>{formatCount()}</span>
          </td>
        </tr>
        <br></br>
      </>
    );

}
export default OrderCoffeeComp;
