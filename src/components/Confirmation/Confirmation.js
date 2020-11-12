import React, { Component } from "react";
import "./Confirmation.css";

class Confirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      REACT_APP_PRICE_OF_3D_SEATS_WITH_GLASS:
        process.env.REACT_APP_PRICE_OF_3D_SEATS_WITH_GLASS,
      REACT_APP_NUMBER_OF_3D_SEATS: process.env.REACT_APP_NUMBER_OF_3D_SEATS,
      REACT_APP_NUMBER_OF_3D_SEATS_WITH_GLASS:
        process.env.REACT_APP_NUMBER_OF_3D_SEATS_WITH_GLASS,
      REACT_APP_PRICE_OF_3D_SEATS: process.env.REACT_APP_PRICE_OF_3D_SEATS,
    };
    this.complete = this.complete.bind(this);
  }

  complete = () => {
    alert("Thanks for booking.");
  };

  render() {
    return (
      <div className="container">
        <div className="boxed">
          <span className="seatLabel">Seats</span>
          <span className="lists ml-3">{localStorage.getItem("reserved")}</span>
          <br></br>
          <span className="seatLabel">Price per seats</span>
          <span className="lists ml-3">
            {this.state.REACT_APP_PRICE_OF_3D_SEATS_WITH_GLASS}
          </span>
          <br></br>
          <br></br>
          <hr></hr>
          <span className="seatLabel">Total Amount</span>
          <span className="lists ml-3">
            {this.state.REACT_APP_PRICE_OF_3D_SEATS_WITH_GLASS *
              localStorage.getItem("reserved").split(",").length}
          </span>
          <br></br>
          <br></br>
          <button className=" complete" onClick={this.complete}>
            Complete
          </button>
        </div>
      </div>
    );
  }
}

export default Confirmation;
