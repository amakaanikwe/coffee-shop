import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {GET_TOTAL} from "../../redux/actionsTypes.js";
import OrderCoffeeComp from "./OrderCoffeeComp.jsx";
import OrderTreatsComp from "./OrderTreatsComp.jsx";
import NavBar from "../MenuComponents/NavBar";

const OrderComp = () => {
  const dispatch = useDispatch();
  const turnCompToggleOn = useSelector(state => state.turnCompToggleOn);
  const coffeeMenu = useSelector(state => state.coffeeMenu);
  const treatsMenu = useSelector(state => state.treatsMenu);
  const total = useSelector(state => state.total);
  React.useEffect(()=>{
    dispatch({ type: GET_TOTAL })
  })

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
                {...item}
  
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
                {...item}
              />
            ))}
          </tbody>
        </table>
            <p>Total: {total} </p>
        <button onClick={(() => dispatch({type:"HANDLE_COMP_TOGGLE"}))}>
          {turnCompToggleOn ? "Order Now" : "Back to Menu"}
        </button>
        <button>Place Order</button>
      </div>
    );

}

export default OrderComp;
