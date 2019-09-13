import React from "react";
import { Provider, connect } from "unistore/react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { store } from "../store/store";

// import alert
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

// import pages
import RecipesSelection from "../pages/recipesSelection";
import Brewing from "../pages/brewing";
import RecipeDetail from "../pages/recipeDetail";
import { Test } from "../pages/test";
import RecipeDemo from "../pages/recipeDemo";
import Login from "../pages/loginTest";
import Register from "../pages/register";
import Activity from "../pages/activity";
import CreateRecipe from "../pages/CreateRecipe";

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE
};

function Routes() {
  return (
    <Provider store={store} className="allpage">
      <AlertProvider template={AlertTemplate} {...options}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/brewing" component={Brewing} />
            <Route exact path="/test" component={Test} />
            <Route exact path="/recipes" component={RecipesSelection} />
            <Route exact path="/recipedemo" component={RecipeDemo} />
            <Route exact path="/recipedetail" component={RecipeDetail} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/activity" component={Activity} />
            <Route exact path="/recipecreate" component={CreateRecipe} />
          </Switch>
        </BrowserRouter>
      </AlertProvider>
    </Provider>
  );
}

export default Routes;
