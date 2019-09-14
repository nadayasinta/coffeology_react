import React from "react";
import { Link } from "react-router-dom";
// import store
import { connect } from "unistore/react";
import actionsRecipes from "../store/actionsRecipes";

// import component
import RecipeCard from "../components/recipeCard";
import Navbar from "../components/navbar";

import loading from "../assets/images/loading.gif";

class RecipesSelection extends React.Component {
  convertSeconds(secondsInput) {
    let minutes = Math.floor(parseInt(secondsInput) / 60);
    let seconds = parseInt(secondsInput) - minutes * 60;
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  }

  async componentDidMount() {
    await this.props.getRecipes();
    console.log(this.props);
  }

  componentWillUnmount() {
    this.props.setRecipes([]);
  }

  render() {
    console.log(this.props.methods);
    console.log(this.props.recipes.length);
    if (this.props.recipes.length === 0) {
      return <img src={loading} alt="loading..." />;
    } else {
      return (
        <div>
          <h2>Recipes Selection</h2>
          {this.props.recipes.map(value => {
            return (
              <div className="col-12">
                <Link to={"/recipes/" + value.id}>
                  <RecipeCard
                    data={value}
                    methodIcon={this.props.methods[value.methodID].icon}
                    time={this.convertSeconds(value.time)}
                  />
                </Link>
              </div>
            );
          })}
          <Navbar />
        </div>
      );
    }
  }
}

export default connect(
  "recipes, methods",
  actionsRecipes
)(RecipesSelection);
