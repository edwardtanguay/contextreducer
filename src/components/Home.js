import { useContext } from 'react';
import { ThemeContext } from '../themeContext';

const Home = () => {
	const {state, dispatch  } = useContext(ThemeContext);

	return (
		<>
			<div className="page pageHome">
				<p>
				Welcome to this site.
				</p>
				<p>The theme is now: {state.theme}</p>
		</div>
		</>
	)
}
export default Home;