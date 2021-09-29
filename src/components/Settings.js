import { useContext } from 'react';
import { ThemeContext } from '../themeContext';

const Settings = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	return (
		<div className="page pageSettings">
			<section className="theme">
				<label>Theme: </label> 
				<button onClick={() => setTheme('dark')}>Dark Theme</button>
				<button onClick={() => setTheme('light')}>Light Theme</button>
			</section>
		</div>
	)
}
export default Settings;