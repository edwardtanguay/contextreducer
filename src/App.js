import { useEffect, useState, useReducer } from 'react';
import './App.scss';
import Home from './components/Home';
import Settings from './components/Settings';
import { ThemeContext } from './themeContext';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';

const initialState = { theme: 'dark' };
const reducer = (state, action) => {
	switch (action.type) {
		case 'dark':
			return { theme: 'dark' };
		case 'light':
			return { theme: 'light' };
		default:
			return { theme: 'dark' };
	}
}

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	// const [theme, setTheme] = useState('dark');

	useEffect(() => {
		if (state.theme === 'dark') {
			document.body.style = 'background: #333;color: #fff;';
		} else {
			document.body.style = 'background: #fff;color: black;';
		}
	}, [state.theme]);

	return (
		<div className="App">
			<ThemeContext.Provider value={{ state, dispatch}}>
				<Router>
					<nav>
						<ul>
							<li><NavLink activeClassName="selected" exact={true} to="/">Home</NavLink></li>
							<li><NavLink activeClassName="selected" to="/settings">Settings</NavLink></li>
						</ul>
					</nav>
					<Switch>
						<Route path="/" exact><Home /></Route>
						<Route path="/settings"><Settings /></Route>
					</Switch>
				</Router>
			</ThemeContext.Provider>
		</div>
	);
}

export default App;