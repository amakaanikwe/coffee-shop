import React from "react";
import "../../css/OrderCompStyle.css";

class OrderCoffeeComp extends React.Component {
  render() {
    return (
      <>
        <tr className="row style">
          <td className="col-sm-12">{this.props.coffeeItem.id}</td>
        </tr>
        <tr className="row">
          <td className="col-sm-9">{this.props.coffeeItem.summary}</td>
          <td className="col-sm-1 priceStyle">{this.props.coffeeItem.price}</td>
          <td className="col-sm-1 btn-group-vertical buttonStyle">
            <div className="btn-group-vertical">
              <button
                onClick={() =>
                  this.props.onCoffeeIncrement(this.props.coffeeItem)
                }
                className="glyphicon glyphicon-menu-up"
              ></button>
              <button
                onClick={() =>
                  this.props.onCoffeeDecrement(this.props.coffeeItem)
                }
                className="glyphicon glyphicon-menu-down"
              ></button>
            </div>
          </td>
          <td className="col-sm-1 itemNumStyle">
            <span>{this.formatCount()}</span>
          </td>
        </tr>
        <br></br>
      </>
    );
  }

  formatCount() {
    // return this.state.count === 0 ? 'zero' : this.state.count;
    // jsx expressions can be used the same way as objects
    const { value } = this.props.coffeeItem;
    return (value === 0) | (value <= 0) ? "0" : value;
  }
}
export default OrderCoffeeComp;
