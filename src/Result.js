import React from "react";
import PropTypes from "prop-types";
import { SUCCESS_MSG, FAILED_MSG } from "./store/constants";

class Result extends React.Component {
  static propTypes = {
    history: PropTypes.object,
  };

  onTryAgainClick = () => {
    this.props.history.push({
      pathname: "/",
    });
  };

  render() {
    const result = this.props.location.state.response.result;
    const isSuccess = result && result.status === "success" ? true : false;
    const successMsg = SUCCESS_MSG;
    const failureMsg = FAILED_MSG;
    const planet = result && result.planet_name;

    return (
      <div className="container">
        <div className="GridItem">
          <div className="card">
            {!isSuccess ? (
              <div className="CardContent">
                <div className="Typography">
                  <p>{failureMsg}</p>
                </div>
              </div>
            ) : (
              <div className="CardContent">
                <div className="Typography">
                  <p>{successMsg}</p>
                </div>
                <br />
                <div className="Typography">
                  <h1>Time Taken</h1>
                </div>
                <div className="Typography">
                  <p>{this.props.history.location.state.timetaken}</p>
                </div>
                <div className="Typography">
                  <h1>Planet Found</h1>
                </div>
                <div className="Typography">
                  <p>{planet}</p>
                </div>
              </div>
            )}
            <div className="cardAction">
              <button onClick={this.onTryAgainClick}>Start Again</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
