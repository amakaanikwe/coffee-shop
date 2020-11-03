import React from "react";
import "../../css/CoffeeTreatsCompStyle.css";
import { useSelector } from "react-redux";

const CoffeeTeaComp = (coffee) => {

    return (
      <>
        <tr className="row compStyle">
          <td className="col-sm-12">{coffee.coffee.id}</td>
        </tr>
        <tr className="row">
          <td className="col-sm-10">{coffee.coffee.summary}</td>
          <td className="col-sm-2">{coffee.coffee.price}</td>
        </tr>
        <br></br>
      </>
    );
  
}
export default CoffeeTeaComp;
