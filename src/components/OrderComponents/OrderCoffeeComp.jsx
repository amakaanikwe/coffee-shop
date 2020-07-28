import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../css/OrderCompStyle.css";

const OrderCoffeeComp = (coffee) => {
  const coffeeMenu = useSelector(state => state.coffeeMenu);
  const formatCount = () => {
    // return this.state.count === 0 ? 'zero' : this.state.count;
    // jsx expressions can be used the same way as objects
    const value  = coffeeMenu[0].value;
    return (value === 0) | (value <= 0) ? "0" : value;
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
                onClick={() => {}}
                className="glyphicon glyphicon-menu-up"
              ></button>
              <button
                onClick={() =>{} }
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
