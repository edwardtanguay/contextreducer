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