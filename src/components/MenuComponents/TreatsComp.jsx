import React from "react";
import "../../css/CoffeeTreatsCompStyle.css";

class TreatsComp extends React.Component {
  render() {
    return (
      <>
        <tr className="row compStyle">
          <td className="col-sm-12">{this.props.treats.id}</td>
        </tr>
        <tr className="row">
          <td className="col-sm-10">{this.props.treats.summary}</td>
          <td className="col-sm-2">{this.props.treats.price}</td>
        </tr>
        <br></br>
      </>
    );
  }
}

export default TreatsComp;
