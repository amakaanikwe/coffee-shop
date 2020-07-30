import React from "react";
import { useSelector, useDispatch } from "react-redux";
import OrderCoffeeComp from "./OrderCoffeeComp.jsx";
import OrderTreatsComp from "./OrderTreatsComp.jsx";
import NavBar from "../MenuComponents/NavBar";

const OrderComp = () => {
  const dispatch = useDispatch();
  const turnCompToggleOn = useSelector(state => state.turnCompToggleOn);
  const coffeeMenu = useSelector(state => state.coffeeMenu);
  const treatsMenu = useSelector(state => state.treatsMenu);

    return (
      <div className="container-fluid menuStyle">
        <div className="row">
        <div className="col-sm-12">
              <NavBar />
          </div>
          <div className="col-sm-3">
            <div className="sectionStyle">Coffee & Tea</div>
          </div>
        </div>
        <br></br>
        <table className="row">
          <tbody className="col-sm-12">
            {coffeeMenu.map((item, i) => (
              <OrderCoffeeComp
                key={i}
                coffee={item}
              />
            ))}
          </tbody>
        </table>
        <br></br>
        <div className="row">
          <div className="col-sm-3">
            <br></br>
            <br></br>
            <div className="sectionStyle">Treats</div>
          </div>
        </div>
        <br></br>
        <table className="row">
          <tbody className="col-sm-12">
            {treatsMenu.map((item, i) => (
              <OrderTreatsComp
                key={i}
                treats={item}
              />
            ))}
          </tbody>
        </table>
        <button onClick={(() => dispatch({type:"HANDLE_COMP_TOGGLE"}))}>
          {turnCompToggleOn ? "Order Now" : "Back to Menu"}
        </button>
        <button>Place Order</button>
      </div>
    );

}

export default OrderComp;
