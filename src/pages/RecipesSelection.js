import React from 'react';
import { Link } from 'react-router-dom';
// import store
import { connect } from 'unistore/react';
import actionsRecipes from '../store/actionsRecipes';

// import component
import RecipeCard from '../components/RecipeCard';
import Pagination from 'react-bootstrap/Pagination';
import loading from '../assets/images/loading.gif';

const _ = require('lodash');

class RecipesSelection extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			pagination: 1
		};
	}

	// convert input in seconds to string with format 'minute:seconds
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
		// get recipe by methodID from param in endpoint and page right now
		await this.props.getRecipesSelection({
			methodID: this.props.match.params.methodID,
			p: this.state.pagination
		});
	}

	// reset props in store
	componentWillUnmount() {
		this.props.setRecipesSelection(null);
	}

	// handle change page button
	handlePreviousPageButton = (event) => {
		event.preventDefault();
		this.setState({ pagination: this.state.pagination - 1 }, () => {
			this.props.getRecipesSelection({
				methodID: this.props.match.params.methodID,
				p: this.state.pagination
			});
		});
	};
	// handle change page button
	handleNextPageButton = (event) => {
		event.preventDefault();
		this.setState({ pagination: this.state.pagination + 1 }, () => {
			this.props.getRecipesSelection({
				methodID: this.props.match.params.methodID,
				p: this.state.pagination
			});
		});
	};

	render() {
		if (this.props.recipesSelection === null) {
			return <img src={loading} alt="loading..." />;
		} else if (_.isEmpty(this.props.recipesSelection.recipes)) {
			return <h5>Maaf, Resep yang ada cari belum ada</h5>;
		} else {
			return (
				<div>
					<h4 className="font-weight-bold">RECIPES SELECTION</h4>
					{this.props.recipesSelection.recipes.map((value) => {
						return (
							<div className="col-12">
								<Link to={'/recipe/' + value.id}>
									<RecipeCard
										data={value}
										method={this.props.methods[this.props.match.params.methodID - 1]}
										time={this.convertSeconds(value.time)}
									/>
								</Link>
							</div>
						);
					})}

					<Pagination size="lg" className="justify-content-between">
						{this.props.recipesSelection.pageNow === 1 ? (
							<span></span>
						) : (
							<Pagination.First onClick={this.handlePreviousPageButton} />
						)}
						{this.props.recipesSelection.pageNow === this.props.recipesSelection.pageTotal ? (
							<span></span>
						) : (
							<Pagination.Last onClick={this.handleNextPageButton} />
						)}
					</Pagination>
				</div>
			);
		}
	}
}
//
export default connect(
	'recipesSelection, methods',
	actionsRecipes
)(RecipesSelection);
