import './App.css';
import React from 'react';
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

class App extends React.Component {

  render() {
    return (
      <div className="Container">
        <div className="App">
          <h1>Finding Falcon!</h1>
          <div className="grid-container">
            <div className="grid-item">
              <div className="paper">
                <Destination>
                </Destination>
              </div>
            </div>
          </div>
          : <CircularProgress />
          <div className="GridContainer">
            <div className='grid-item'>
              <div className="card">
                <div className='card-content'>
                  <Typography color="textSecondary" gutterBottom>
                    Time Taken
                  </Typography>
                  <div>
                    <Button disabled={!this.isAllSelected()} onClick={this.findFalcon}>Find Falcon</Button>
                    <Button onClick={this.onReset}>Reset</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
