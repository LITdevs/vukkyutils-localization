const path = require("path");

const vukkytils = {
	strings: {},
	language: "en",
	fallbackLanguage: "en",

	/**
	 * Gets a string from strings (loadStrings) in the user's language. Falls back to English if there's no string for the user's language.
	 * @param {string} string - The string to get
	 */
	getString(string) {
		let localString = this.strings[this.language][string];
		if(localString) {
			return localString;
		} else {
			return this.strings[this.fallbackLanguage][string];
		}
	},

	/**
	 * Loads strings
	 * @param stringPath - The string file to get
	 */
	loadStrings(stringPath) {
		const basePath = path.dirname(module.parent.filename);
		const fullPath = path.join(basePath, stringPath);
		this.strings = require(fullPath);
	},

	/**
	 * Sets the user language
	 * @param language - The language that the user's using
	 */
	setUserLanguage(language) {
		this.language = language;
	},

	/**
	 * Sets the fallback language
	 * @param language - The language that vuktils should fall back to
	 */
	setFallbackLanguage(language) {
		this.fallbackLanguage = language;
	}
};

module.exports = vukkytils;
