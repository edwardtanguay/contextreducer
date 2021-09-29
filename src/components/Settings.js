import { useContext } from 'react';
import { ThemeContext } from '../themeContext';
import LanguageManager from '../classes/languageManager';


const Settings = () => {
	const { state, dispatch } = useContext(ThemeContext);
	const text = (idCode) => {
		return LanguageManager.getText(state.language, idCode);
	}
	return (
		<div className="page pageSettings">
			<section className="theme">
				<label>{text('theme')}: </label>
				<button onClick={() => dispatch({ type: 'dark' })}>{text('dark')}</button>
				<button onClick={() => dispatch({ type: 'light' })}>{text('light')}</button>
			</section>
			<section className="language">
				<label>{text('language')}: </label>
				<button onClick={() => dispatch({ type: 'english' })}>{text('english')}</button>
				<button onClick={() => dispatch({ type: 'german' })}>{text('german')}</button>
			</section>
			<section className="profile">
				<label>{text('profile')}: </label>
				<button onClick={() => dispatch({ type: 'john' })}>John</button>
				<button onClick={() => dispatch({ type: 'hans' })}>Hans</button>
			</section>
		</div>
	)
}
export default Settings;