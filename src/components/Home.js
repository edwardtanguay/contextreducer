import { useContext } from 'react';
import { ThemeContext } from '../themeContext';

const Home = () => {
	const { state } = useContext(ThemeContext);

	return (
		<>
			<div className="page pageHome">
				<p>
					Welcome to this site.
				</p>
				<p>The theme is now: {state.theme}</p>
				<p>The language is now: {state.language}</p>
			</div>
		</>
	)
}
export default Home;