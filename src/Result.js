import React from "react";
import PropTypes from "prop-types";
import { SUCCESS_MSG, FAILED_MSG } from "./store/constants";
import { useNavigate } from "react-router-dom";

function Result(props) {
  const history = useNavigate();

  const onTryAgainClick = () => {
    history.push("/");
  };

  const result = props.location.state.response.result;
  const isSuccess = result && result.status === "success";
  const successMsg = SUCCESS_MSG;
  const failureMsg = FAILED_MSG;
  const planet = result && result.planet_name;

  return (
    <div className="grid-container">
      <div className="grid-item">
        <div className="card">
          {!isSuccess ? (
            <div className="card-content">
              <p className="text-secondary">{failureMsg}</p>
            </div>
          ) : (
            <div className="card-content">
              <p className="text-secondary">{successMsg}</p>
              <br />
              <p className="text-secondary gutterBottom"> Time Taken </p>
              <h3 className="heading">
                {props.history.location.state.timetaken}
              </h3>
              <p className="text-secondary gutterBottom"> Planet found </p>
              <h3 className="heading">{planet}</h3>
            </div>
          )}
          <div className="card-actions">
            <button onClick={onTryAgainClick}>Start Again</button>
          </div>
        </div>
      </div>
    </div>
  );
}

Result.propTypes = {
  location: PropTypes.object,
};

export default Result;

// import React from "react";
// import PropTypes from "prop-types";
// import { SUCCESS_MSG, FAILED_MSG } from "./store/constants";

// class Result extends React.Component {
//   static propTypes = {
//     history: PropTypes.object,
//   };

//   onTryAgainClick = () => {
//     this.props.history.push({
//       pathname: "/",
//     });
//   };

//   render() {
//     const result = this.props.location.state.response.result;
//     const isSuccess = result && result.status === "success" ? true : false;
//     const successMsg = SUCCESS_MSG;
//     const failureMsg = FAILED_MSG;
//     const planet = result && result.planet_name;

//     return (
//       <div className="grid-container">
//         <div className="grid-item">
//           <div className="card">
//             {!isSuccess ? (
//               <div className="card-content">
//                 <p class="text-secondary">{failureMsg}</p>
//               </div>
//             ) : (
//               <div className="card-content">
//                 <p class="text-secondary">{successMsg}</p>
//                 <br />
//                 <p class="text-secondary gutterBottom"> Time Taken </p>
//                 <h3 class="heading">
//                   {this.props.history.location.state.timetaken}
//                 </h3>
//                 <p class="text-secondary gutterBottom"> Planet found </p>
//                 <h3 class="heading">{planet}</h3>
//               </div>
//             )}
//             <div className="card-actions">
//               <button onClick={this.onTryAgainClick}>Start Again</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Result;
