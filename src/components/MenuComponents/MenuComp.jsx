import React from "react";
import NavBar from "./NavBar";
import CoffeeTeaComp from "./CoffeeTeaComp.jsx";
import TreatsComp from "./TreatsComp.jsx";
import "../../css/MenuCompStyle.css";
import "../../css/CoffeeTreatsCompStyle.css";

class MenuComp extends React.Component {
  render() {
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
              {this.props.menu.coffee.map((item, i) => (
                <CoffeeTeaComp key={i} coffee={item} />
              ))}
            </tbody>
          </table>
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
              {this.props.menu.treats.map((item, i) => (
                <TreatsComp key={i} treats={item} />
              ))}
            </tbody>
          </table>
          <button onClick={() => this.props.onCompToggle()}>
            {!this.props.turnCompToggleOn ? "Order Now" : "Back to Menu"}
          </button>
        </section>
      </>
    );
  }
}

export default MenuComp;
