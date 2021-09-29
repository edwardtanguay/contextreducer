import { useState } from 'react';
import './App.scss';
import Home from './components/Home';
import { ThemeContext } from './themeContext';

function App() {
	const [theme, setTheme] = useState('dark');
	return (
		<div className="App">
			<ThemeContext.Provider value={{ theme, setTheme }}>
				<Home />
			</ThemeContext.Provider>
		</div>
	);
}

export default App;