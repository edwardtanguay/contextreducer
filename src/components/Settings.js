import { useContext } from 'react';
import { ThemeContext } from '../themeContext';

const Settings = () => {
	const { state, dispatch } = useContext(ThemeContext);

	return (
		<div className="page pageSettings">
			<section className="theme">
				<label>Theme: </label> 
				<button onClick={() => dispatch({type: 'dark'})}>Dark Theme</button>
				<button onClick={() => dispatch({type: 'light'})}>Light Theme</button>
			</section>
		</div>
	)
}
export default Settings;