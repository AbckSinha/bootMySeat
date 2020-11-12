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
      seat: [
        "A1",
        "A2",
        "A3",
        "A4",
        "A5",
        "A6",
        "A7",
        "A8",
        "A9",
        "A10",
        "B1",
        "B2",
        "B3",
        "B4",
        "B5",
        "B6",
        "B7",
        "B8",
        "B9",
        "B10",
        "C1",
        "C2",
        "C3",
        "C4",
        "C5",
        "C6",
        "C7",
        "C8",
        "C9",
        "C10",
      ],
      seatAvailable: [
        "A1",
        "A2",
        "A3",
        "A4",
        "A5",
        "A6",
        "A7",
        "A8",
        "A9",
        "A10",
        "B1",
        "B2",
        "B3",
        "B4",
        "B5",
        "B6",
        "B7",
        "B8",
        "B9",
        "B10",
        "C1",
        "C2",
        "C3",
        "C4",
        "C5",
        "C6",
        "C7",
        "C8",
        "C9",
        "C10",
      ],
      seatReserved: localStorage.getItem("reserved")
        ? localStorage.getItem("reserved")
        : [],
      seatSelected: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submit = this.submit.bind(this);
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

  onClickData(seat) {
    console.log("seat", seat);
    if (this.state.seatReserved.indexOf(seat) > -1) {
      this.setState({
        seatAvailable: this.state.seatAvailable.concat(seat),
        seatReserved: this.state.seatReserved.filter((res) => res != seat),
      });
    } else {
      this.setState({
        seatReserved: this.state.seatReserved.concat(seat),
        seatAvailable: this.state.seatAvailable.filter((res) => res != seat),
      });
    }
  }

  checktrue(row) {
    if (this.state.seatSelected.indexOf(row) > -1) {
      return false;
    } else {
      return true;
    }
  }

  handleSubmited() {
    this.setState({
      seatSelected: this.state.seatSelected.concat(this.state.seatReserved),
    });
    console.log(this.state.seatReserved);
    localStorage.setItem("reserved", this.state.seatReserved);
    this.setState({
      seatReserved: [],
    });
    this.props.history.push("/confirmation");
  }

  submit = () => {
    if (this.state.format === "3D") {
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
          {this.state.book && (
            <Grid
              seat={this.state.seat}
              available={this.state.seatAvailable}
              reserved={this.state.seatReserved}
              selected={this.state.seatSelected}
              confirmed={
                localStorage.getItem("reserved")
                  ? localStorage.getItem("reserved")
                  : []
              }
              onClickData={this.onClickData.bind(this)}
              checktrue={this.checktrue.bind(this)}
              handleSubmited={this.handleSubmited.bind(this)}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Seat;
