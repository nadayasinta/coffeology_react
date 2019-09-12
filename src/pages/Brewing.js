import React from 'react';
import { connect } from 'unistore/react';
import { actionsTimer } from '../store/store';
import Header from '../components/header';
import MethodCard from '../components/methodCard';
import Navbar from '../components/navbar';
import Timer from '../components/timer';

class Brewing extends React.Component {
  render() {
    return (
          <div>
              <Header />
              <div className="container">
                  <div className="row">
                      {this.props.methods.map((method, index) => (
                          <div className="col-4 py-3">
                              <MethodCard
                                  name={method.name}
                                  icon={method.icon}
                                />
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
  'methods,recipeSteps, timerNowIndex, timerUp',
  actionsTimer,
)(Brewing);