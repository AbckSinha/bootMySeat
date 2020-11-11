import React, { Component } from "react";
import Grid from "../Grid/Grid";
import "./Seat-Booking.css";

class Seat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "3D",
      hall: "",
      book: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submit = this.submit.bind(this);
    const {
      REACT_APP_NUMBER_OF_3D_SEATS,
      REACT_APP_NUMBER_OF_3D_SEATS_WITH_GLASS,
      REACT_APP_PRICE_OF_3D_SEATS,
      REACT_APP_PRICE_OF_3D_SEATS_WITH_GLASS,
    } = process.env;
    console.log(
      "PRICE_OF_3D_SEATS_WITH_GLASS",
      REACT_APP_PRICE_OF_3D_SEATS_WITH_GLASS
    );
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      book: false,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ book: true });
  };

  submit = () => {
    if (this.state.format === "3D") {
      REACT_APP_NUMBER_OF_3D_SEATS.map;
    }
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>HallName:</label>
            <input
              className="form-control"
              name="hall"
              type="text"
              value={this.state.hall}
              required
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>
              Format:
              <br />
              <select
                className="custom-select mt-1 format-select"
                name="format"
                value={this.state.format}
                onChange={this.handleChange}
              >
                <option value="3d">Normal 3D</option>
                <option value="3dg">Glass 3D</option>
              </select>
            </label>
          </div>

          <div className="form-group">
            <label>Showtime:</label>
            <br />
            <input
              className="format-select"
              type="time"
              name="usr_time"
              defaultValue="19:00"
            />
          </div>

          <div>
            <button className="submitBtn format-select" onClick={this.submit}>
              Submit
            </button>
          </div>
        </form>
        <div>
          <Grid
            seat={this.state.seat}
            available={this.state.seatAvailable}
            reserved={this.state.seatReserved}
            selected={this.state.seatSelected}
            onClickData={this.onClickData.bind(this)}
            checktrue={this.checktrue.bind(this)}
            handleSubmited={this.handleSubmited.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default Seat;
