const stateKeys = (state) => {
	return {
		credentials: state.loginManager.credentials,
		displayPassword: state.loginManager.displayPassword,
		selectedSkill: state.portfolioManager.selectedSkill,
		portfolios: state.portfolioManager.portfolios,
	}
};

export default stateKeys;