import React from "react";
import PropTypes from "prop-types";
import { SUCESS_MSG, FAILED_MSG } from "../store/constants";

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
    const successMsg = SUCESS_MSG;
    const failureMsg = FAILED_MSG;
    const planet = result && result.planet_name;

    return (
      <div className="container">
        <div className="GridItem">
          <div className="card">
            {!isSuccess ? (
              <div className="CardContent">
                <Typography>{failureMsg}</Typography>
              </div>
            ) : (
              <div className="CardContent">
                <Typography>{successMsg}</Typography>
                <br />
                <Typography>Time Taken</Typography>
                <Typography>
                  {this.props.history.location.state.timetaken}
                </Typography>
                <Typography>Planet Found</Typography>
                <Typography>{planet}</Typography>
              </div>
            )}
            <div className="cardAction">
              <Button onClick={this.onTryAgainClick}>Start Again</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
