import API from './API';

const actions = (dispatch) => {
	return {
		updateUsername: (value) => {
			dispatch({
				type: 'UPDATE_USERNAME',
				username: value
			})
		},
		updatePassword: (value) => {
			dispatch({
				type: 'UPDATE_PASSWORD',
				password: value
			})
		},
		togglePassword: () => {
			dispatch({
				type: 'TOGGLE_PASSWORD'
			})
		},
		handleLogin: (event, credentials) => {
			event.preventDefault();
      console.log('Sending:',{ credentials });
		},
		pullPortfolio: () => {
			API.getProjects()
				.then(resp => dispatch({
					type: 'LOAD_PROJECTS',
					projects: resp.data
				}))
				.catch(err => console.log(err.message));
		},
		toggleSkill: (skill) => {
			dispatch({
				type: 'TOGGLE_SKILL',
				selectedSkill: skill
			})
		}
	}
};

export default actions;