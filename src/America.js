import React, { Component } from 'react';
import axios from 'axios';

export default class extends Component {
	state = {
		data: null
	};

	callAPI = async () => {
		const response = await axios.get(
			'https://newsapi.org/v2/top-headlines?country=us&apiKey=61120652e560407b8e961993f5ebaa8f'
		);
		this.setState({
			data: response.data.articles
		});
	};

	componentDidMount() {
		this.callAPI();
	}

	render() {
		const { data } = this.state;

		return (
			<div>
				{data && (
					<textarea rows={100} cols={100}>
						{JSON.stringify(data, null, 3)}
					</textarea>
				)}
			</div>
		);
	}
}
