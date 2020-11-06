import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "./NavBar";
import CoffeeTeaComp from "./CoffeeTeaComp.jsx";
import TreatsComp from "./TreatsComp.jsx";
import ArrowComp from "./ArrowComp.jsx";
import "../../css/MenuCompStyle.css";
import "../../css/CoffeeTreatsCompStyle.css";

const MenuComp = () => {
    const dispatch = useDispatch();
    const turnCompToggleOn = useSelector(state => state.turnCompToggleOn);
    const coffeeMenu = useSelector(state => state.coffeeMenu);
    const treatsMenu = useSelector(state => state.treatsMenu);
   
    return (
      <>
        <section className="container-fluid menuStyle">
          <div className="row">
            <div className="col-sm-12">
              <NavBar />
            </div>
            <div className="col-sm-3">
              <div className="sectionStyle">Coffee & Tea</div>
            </div>
          </div>
          <table className="row">
            <tbody className="col-sm-12">
              <br></br>
              {coffeeMenu.map((item, i) => (
                <CoffeeTeaComp key={i} coffee={item} />
              ))}
            </tbody>
          </table>

          <ArrowComp />

          <div className="row">
            <div className="col-sm-3">
              <br></br>
              <br></br>
              <div className="sectionStyle">Treats</div>
            </div>
          </div>
          <table className="row">
            <tbody className="col-sm-12">
              <br></br>
              {treatsMenu.map((item, i) => (
                <TreatsComp key={i} treats={item} />
              ))}
            </tbody>
          </table>
          <button onClick={(() => dispatch({type:"HANDLE_COMP_TOGGLE"}))}>
            {turnCompToggleOn ? "Order Now" : "Back to Menu"}
          </button>
        </section>
      </>
    );

}

export default MenuComp;
