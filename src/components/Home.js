import { useEffect, useContext } from 'react';
import { ThemeContext } from '../themeContext';

const Home = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	useEffect(() => {
	setTheme('ok2');
	}, []);

	// const changeIt = async () => {
	// 	console.log('in here');
	// 	setTheme(n => 'changed here');
	// }
	return (
		<>
			<h2>Home</h2>
			<div onClick={async () => setTheme('newone')} >Theme: {theme}</div>
		</>
	)
}
export default Home;