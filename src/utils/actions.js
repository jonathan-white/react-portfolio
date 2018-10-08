import API from './API';

const actions = (dispatch) => {
	return {
		pullPortfolio: () => {
			API.getProjects()
				.then(resp => dispatch({
					type: 'LOAD_PROJECTS',
					projects: resp.data
				}))
				.catch(err => console.log(err.message));
		},
	}
};

export default actions;