import { useEffect, useReducer } from 'react';
import './App.scss';
import Home from './components/Home';
import Settings from './components/Settings';
import { ThemeContext } from './themeContext';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import LanguageManager from './classes/languageManager';

const initialState = {
	theme: 'dark',
	language: 'english'
};
const reducer = (state, action) => {
	switch (action.type) {
		case 'dark':
			return {...state, theme: 'dark' };
		case 'light':
			return {...state, theme: 'light'};
		case 'english':
			return {...state, language: 'english' };
		case 'german':
			return {...state, language: 'german'};
		case 'john':
			return { language: 'english', theme: 'light' };
		case 'hans':
			return { language: 'german', theme: 'dark' };
		default:
			return initialState;
	}
}

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	const text = (idCode) => {
		return LanguageManager.getText(state.language, idCode);
	}

	useEffect(() => {
		if (state.theme === 'dark') {
			document.body.style = 'background: #333;color: #fff;';
		} else {
			document.body.style = 'background: #fff;color: black;';
		}
	}, [state.theme]);

	return (
		<div className="App">
			<ThemeContext.Provider value={{ state, dispatch }}>
				<Router>
					<nav>
						<ul>
							<li><NavLink activeClassName="selected" exact={true} to="/">{text('home')}</NavLink></li>
							<li><NavLink activeClassName="selected" to="/settings">{text('settings')}</NavLink></li>
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