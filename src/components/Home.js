import { useContext } from 'react';
import { ThemeContext } from '../themeContext';
import LanguageManager from '../classes/languageManager';

const Home = () => {
	const { state } = useContext(ThemeContext);
	const text = (idCode) => {
		return LanguageManager.getText(state.language, idCode);
	}

	return (
		<>
			<div className="page pageHome">
				<p>{text('welcomeToSite')} </p>
				<hr />
				<p>{text('themeIsNow')}: {text(state.theme)}</p>
				<p>{text('languageIsNow')}: {text(state.language)}</p>
			</div>
		</>
	)
}
export default Home;