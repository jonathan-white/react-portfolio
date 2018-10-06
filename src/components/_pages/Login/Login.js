import React from 'react';
import { connect } from 'react-redux';
import actions from '../../../utils/actions';
import stateKeys from '../../../utils/stateKeys';
import './Login.css';

const mapStateToLoginProps = (state) => stateKeys(state);
const mapDispatchToLoginProps = (dispatch) => actions(dispatch);

const LoginForm = ({credentials, displayPassword, updateUsername, updatePassword,
	togglePassword, handleLogin
}) => (
	<section className="container login-page">
		<div className="login-wrapper">
			<p>Welcome, please login</p>
			<form id="login-form">
				<div className="inputfield">
					<label htmlFor="username">Username</label>
					<input id="username" type="text" onChange={(e) => updateUsername(e.target.value)} />
				</div>
				<div className="inputfield">
					<label htmlFor="password">Password</label>
					<input id="password" type={displayPassword ? 'text' : 'password'}
						onChange={(e) => updatePassword(e.target.value)} />
					{displayPassword 
						? <i className="fas fa-eye" title="Hide" onClick={() => togglePassword}></i>
						:	<i className="far fa-eye" title="Show" onClick={() => togglePassword}></i>
					}
				</div>
				<div>
					<input className="btn btn-primary" type="submit" value="Login"
						onClick={(e) => handleLogin(e, credentials)}
					/>
				</div>
			</form>
		</div>
	</section>
);

const Login = connect(
	mapStateToLoginProps,
	mapDispatchToLoginProps
)(LoginForm);

export default Login;