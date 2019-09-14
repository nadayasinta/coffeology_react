import React from "react";

// import store
import { connect } from "unistore/react";

// import component
import MethodCard from "../components/methodCard";
import Navbar from "../components/navbar";

class Brewing extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            {this.props.methods.map((method, index) => (
              <div className="col-4 p-1">
                <MethodCard name={method.name} icon={method.icon} />
              </div>
            ))}
          </div>
        </div>
        <Navbar />
      </div>
    );
  }
}

export default connect(
  "methods,recipeSteps, timerNowIndex, timerUp",
)(Brewing);
