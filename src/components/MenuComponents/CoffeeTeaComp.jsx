import React from "react";
import "../../css/CoffeeTreatsCompStyle.css";

const CoffeeTeaComp = () => {

    return (
      <>
        <tr className="row compStyle">
          <td className="col-sm-12">{this.props.coffee.id}</td>
        </tr>
        <tr className="row">
          <td className="col-sm-10">{this.props.coffee.summary}</td>
          <td className="col-sm-2">{this.props.coffee.price}</td>
        </tr>
        <br></br>
      </>
    );
  
}
export default CoffeeTeaComp;
