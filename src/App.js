import { connect } from 'react-redux';
import './App.css';
import routes from './utils/routes';
import actions from './utils/actions';

const mapDispatchToAppProps = (dispatch) => {
	return actions(dispatch);
};

const App = ({pullPortfolio}) => {
	pullPortfolio();
	return routes
};

const AppWrapper = connect(null, mapDispatchToAppProps)(App);

export default AppWrapper;
