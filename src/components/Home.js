import { useEffect, useContext } from 'react';
import { ThemeContext } from '../themeContext';

const Home = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	return (
		<>
			<div className="page pageHome">
				<p>
				Welcome to this site.
				</p>
				<p>The theme is now: {theme}</p>
		</div>
		</>
	)
}
export default Home;