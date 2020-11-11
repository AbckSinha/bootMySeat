import React, { Component } from "react";

class DrawGrid extends Component {
  render() {
    return (
      <div className="container">
        <h2></h2>
        <table className="grid">
          <tbody>
            <tr>
              {this.props.seat.map((row) => (
                <td
                  className={
                    this.props.selected.indexOf(row) > -1
                      ? "reserved"
                      : this.props.reserved.indexOf(row) > -1
                      ? "selected"
                      : "available"
                  }
                  key={row}
                  onClick={
                    this.props.checktrue(row)
                      ? (e) => this.onClickSeat(row)
                      : null
                  }
                >
                  {row}{" "}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
        <button
          type="button"
          className="btn-success btnmargin"
          onClick={() => this.props.handleSubmited()}
        >
          Confirm Booking
        </button>
      </div>
    );
  }

  onClickSeat(seat) {
    this.props.onClickData(seat);
  }
}
