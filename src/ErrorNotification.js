import React from "react";
import { resetError } from "./store/error";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

function ErrorNotification() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const location = useLocation();

  const onTryAgainClick = () => {
    history.push("/");
    dispatch(resetError());
  };

  const error = location.state?.response?.error?.error;

  return (
    <div>
      {error && (
        <div className="errorDiv">
          <div className="grid-item">
            <div className="paper">
              <h2>{error}</h2>
              <button
                className="button button-primary"
                onClick={onTryAgainClick}
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ErrorNotification;

// import React from "react";
// import { resetError } from "./store/error";
// import { connect } from "react-redux";

// class ErrorNotification extends React.Component {
//   onTryAgainClick = () => {
//     this.props.history.push({
//       pathname: "/",
//     });
//     this.props.resetError();
//   };

//   render() {
//     const error = this.props.location.state.response.error.error;
//     return (
//       <>
//         {error && (
//           <div className="errorDiv">
//             <div className="grid-item">
//               <div className="paper">
//                 <h2>{error}</h2>
//                 <button
//                   className="button button-primary"
//                   onClick={this.onTryAgainClick()}
//                 >
//                   Try Again
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//         ;
//       </>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   state,
// });

// const mapDispatchToProps = (dispatch) => ({
//   resetError: () => {
//     dispatch(resetError());
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ErrorNotification);
