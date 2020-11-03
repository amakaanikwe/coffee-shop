import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {COFFEE_INCREASE, COFFEE_DECREASE} from "../../redux/actionsTypes.js";
import "../../css/OrderCompStyle.css";

const OrderCoffeeComp = ({id, summary, price, value}) => {

  const coffeeMenu = useSelector(state => state.coffeeMenu);
  const dispatch = useDispatch();
  // const formatCount = () => {
  //   // return this.state.count === 0 ? 'zero' : this.state.count;
  //   // jsx expressions can be used the same way as objects
  //   const value  = coffeeMenu[0].value;
  //   return (value === 0) | (value <= 0) ? "0" : value;
  // }

  function incrimentCoffeeCout (coffeeId){
    dispatch({
      type: COFFEE_INCREASE,
      payload: coffeeId
    })

  }

  function decrementCoffeeCout (coffeeId){
    dispatch({
      type: COFFEE_DECREASE,
      payload: coffeeId
    })   
  }

    return (
      <>
        <tr className="row style">
          <td className="col-sm-12">{id}</td>
        </tr>
        <tr className="row">
          <td className="col-sm-9">{summary}</td>
          <td className="col-sm-1 priceStyle">{price}</td>
          <td className="col-sm-1 btn-group-vertical buttonStyle">
            <div className="btn-group-vertical">
              <button
                onClick={() => {incrimentCoffeeCout(id)}}
                className="glyphicon glyphicon-menu-up"
              ></button>
              <button
                onClick={() =>{decrementCoffeeCout(id)} }
                className="glyphicon glyphicon-menu-down"
              ></button>
            </div>
          </td>
          <td className="col-sm-1 itemNumStyle">
            <span>{value}</span>
          </td>
        </tr>
          {/* <td className="col-sm-1 itemNumStyle">
            <span>{formatCount()}</span>
          </td>
        </tr> */}
        <br></br>
      </>
    );

}
export default OrderCoffeeComp;
