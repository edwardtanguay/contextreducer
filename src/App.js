import { useEffect, useState } from 'react';
import './App.scss';
import Home from './components/Home';
import Settings from './components/Settings';
import { ThemeContext } from './themeContext';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';


function App() {
	const [theme, setTheme] = useState('dark');

	useEffect(() => {
		if (theme === 'dark') {
			document.body.style = 'background: #333;color: #fff;';
		} else {
			document.body.style = 'background: #fff;color: black;';
		}
	}, [theme]);

	return (
		<div className="App">
			<ThemeContext.Provider value={{ theme, setTheme }}>
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