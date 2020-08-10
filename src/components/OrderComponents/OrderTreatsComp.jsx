import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {TREATS_INCREASE, TREATS_DECREASE} from "../../redux/actionsTypes.js";
import "../../css/OrderCompStyle.css";

const OrderTreatsComp = ({id, summary, price, value}) => {
  const treatsMenu = useSelector(state => state.treatsMenu);
  const dispatch = useDispatch();


  // const formatCount = () => {
  //   // return this.state.count === 0 ? 'zero' : this.state.count;
  //   // jsx expressions can be used the same way as objects
  //   const value  = treatsMenu[0].value;

  //   return (value === 0) | (value <= 0) ? 0 : value;
  // }

  function incrimentTreatsCout (treatsId){
    dispatch({
      type: TREATS_INCREASE,
      payload: treatsId
    })

  }

  function decrementTreatsCout (treatsId){
    dispatch({
      type: TREATS_DECREASE,
      payload: treatsId
    })   
  }

    return (
      <>
        <tr className="row style">
          <td className="col-sm-12">{id}</td>
        </tr>
        <tr className="row">
          <td className="col-sm-9">{summary}</td>
          <td className="col-sm-1 priceStyle">{price}</td>
          <td className="col-sm-1 btn-group-vertical buttonStyle">
            <div className="btn-group-vertical">
              <button
                onClick={() =>
                  {incrimentTreatsCout(id)}
                }
                className="glyphicon glyphicon-menu-up"
              ></button>
              <button
                onClick={() =>
                 {decrementTreatsCout(id)}
                }
                className="glyphicon glyphicon-menu-down "
              ></button>
            </div>
          </td>
          <td className="col-sm-1 itemNumStyle">
            <span>{value}</span>
          </td>
        </tr>
        <br></br>
      </>
    );


}

export default OrderTreatsComp;
