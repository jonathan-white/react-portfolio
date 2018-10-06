import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import Components
import Header from '../components/Header/';
import Footer from '../components/Footer/';
import NavTabs from '../components/NavTabs/';

// Import Page Components
import AboutPage from '../components/_pages/About';
import PortfolioPage from '../components/_pages/Portfolio';
import ContactPage from '../components/_pages/Contact';
import LoginPage from '../components/_pages/Login';
import NoMatch from '../components/_pages/404';

import * as routePaths from './routePaths';

const routes = (
	<Router>
		<div className="App">
			<Header />
			<NavTabs />
			<Switch>
				<Route exact path={routePaths.HOME} component={AboutPage} />
				<Route exact path={routePaths.ABOUT} component={AboutPage} />
				<Route exact path={routePaths.PORTFOLIO} component={PortfolioPage} />
				<Route exact path={routePaths.CONTACT} component={ContactPage} />
				<Route exact path={routePaths.LOGIN} component={LoginPage} />
				<Route component={NoMatch} />
			</Switch>
			<Footer />
		</div>
	</Router>
);

export default routes;