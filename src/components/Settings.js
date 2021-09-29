import { useContext } from 'react';
import { ThemeContext } from '../themeContext';

const Settings = () => {
	const { dispatch } = useContext(ThemeContext);

	return (
		<div className="page pageSettings">
			<section className="theme">
				<label>Theme: </label> 
				<button onClick={() => dispatch({type: 'dark'})}>Dark Theme</button>
				<button onClick={() => dispatch({type: 'light'})}>Light Theme</button>
			</section>
			<section className="language">
				<label>Language: </label> 
				<button onClick={() => dispatch({type: 'english'})}>English</button>
				<button onClick={() => dispatch({type: 'german'})}>German</button>
			</section>
			<section className="profile">
				<label>Profile: </label> 
				<button onClick={() => dispatch({type: 'john'})}>John</button>
				<button onClick={() => dispatch({type: 'hans'})}>Hans</button>
			</section>
		</div>
	)
}
export default Settings;