class LanguageManager {
	static getText(language, idCode) {
		const texts = {
			dark: {
				english: 'dark',
				german: 'dunkel'
			},
			theme: {
				english: 'Theme',
				german: 'Farbthema'
			},
			light: {
				english: 'light',
				german: 'hell'
			},
			language: {
				english: 'Language',
				german: 'Sprache'
			},
			profile: {
				english: 'Profile',
				german: 'Profil'
			},
			english: {
				english: 'English',
				german: 'Englisch'
			},
			german: {
				english: 'German',
				german: 'Deutsch'
			},
			home: {
				english: 'Home',
				german: 'Startseite'
			},
			settings: {
				english: 'Settings',
				german: 'Eigenschaften'
			},
			welcomeToSite: {
				english: 'Welcome to this site.',
				german: 'Willkommen auf dieser Website.'
			},
			themeIsNow: {
				english: 'The theme is now',
				german: 'Das Farbthema ist jetzt'
			},
			languageIsNow: {
				english: 'The language is now',
				german: 'Die Sprache is jetzt'
			}
		}
		if (texts.hasOwnProperty(idCode)) {
			return texts[idCode][language];
		} else {
			return '[UNKNOWN]';
		}
	}
}
export default LanguageManager;