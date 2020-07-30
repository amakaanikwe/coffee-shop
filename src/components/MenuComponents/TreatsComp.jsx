import React from "react";
import "../../css/CoffeeTreatsCompStyle.css";
import { useSelector } from "react-redux";

const TreatsComp = (treats) => {

    return (
      <>
        <tr className="row compStyle">
          <td className="col-sm-12">{treats.treats.id}</td>
        </tr>
        <tr className="row">
          <td className="col-sm-10">{treats.treats.summary}</td>
          <td className="col-sm-2">{treats.treats.price}</td>
        </tr>
        <br></br>
      </>
    );
  }


export default TreatsComp;
