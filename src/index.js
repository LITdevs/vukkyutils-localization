const path = require("path");
const util = require('util'); 

const vukkyutils = {
	strings: {},
	language: "en",
	fallbackLanguage: "en",

	/**
	 * Gets a string from the loaded strings in the set language. Falls back to the fallback language if there's no string for the current language.
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
	 * @param stringPath - The string file to load
	 */
	loadStrings(stringPath) {
		const basePath = path.dirname(module.parent.filename);
		const fullPath = path.join(basePath, stringPath);
		this.strings = require(fullPath);
	},

	/**
	 * Sets the language to get strings in
	 * @param language - The language to get strings in
	 */
	setLanguage(language) {
		this.language = language;
	},

	/**
	 * Sets the fallback language
	 * @param language - The language that vukkyutils should fall back to
	 */
	setFallbackLanguage(language) {
		this.fallbackLanguage = language;
	}
};

module.exports = vukkyutils;
