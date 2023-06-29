import React from "react";
import { resetError } from "./store/error";
import { connect } from "react-redux";

class ErrorNotification extends React.Component {
  onTryAgainClick = () => {
    this.props.history.push({
      pathname: "/",
    });
    this.props.resetError();
  };

  render() {
    const error = this.props.location.state.response.error.error;
    return (
      <>
        {error && (
          <div className="errorDiv">
            <div className="Grid">
              <div className="paper">
                <h2>{error}</h2>
                <button
                  variant="conatined"
                  className="button"
                  color="primary"
                  onClick={this.onTryAgainClick()}
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        )}
        ;
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  resetError: () => {
    dispatch(resetError());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorNotification);
