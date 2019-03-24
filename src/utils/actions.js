import API from './API';
import projects from '../constants/portfolios.json';

const actions = (dispatch) => {
	return {
		pullPortfolio: () => {
			dispatch({
				type: 'LOAD_PROJECTS',
				projects: projects
			});
		}
	}
};

export default actions;