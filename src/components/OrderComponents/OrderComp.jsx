import React from "react";
import { useSelector, useDispatch} from "react-redux";
import {GET_COFFEE_TOTAL} from "../../redux/actionsTypes.js";
import OrderCoffeeComp from "./OrderCoffeeComp.jsx";
import OrderTreatsComp from "./OrderTreatsComp.jsx";
import NavBar from "../MenuComponents/NavBar";

const OrderComp = () => {
  const turnCompToggleOn = useSelector(state => state.turnCompToggleOn);
  const coffeeMenu = useSelector(state => state.coffeeMenu);
  const treatsMenu = useSelector(state => state.treatsMenu);
  const {coffeeTotal} = useSelector(state => state);
  const dispatch = useDispatch();
  
  React.useEffect(()=>{
    dispatch({ type: GET_COFFEE_TOTAL })
  }, [])

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
            <p>Total: {coffeeTotal} </p>
        <button onClick={(() => dispatch({type:"HANDLE_COMP_TOGGLE"}))}>
          {turnCompToggleOn ? "Order Now" : "Back to Menu"}
        </button>
        <button>Place Order</button>
      </div>
    );

}

export default OrderComp;
