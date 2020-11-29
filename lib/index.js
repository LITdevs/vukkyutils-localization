const path = require("path");
const util = require('util'); 

const vukkyutils = {
	strings: {},
	language: "en",
	fallbackLanguage: "en",
	placeholderMode: false,

	/**
	 * Gets a string from the loaded strings in the set language. Falls back to the fallback language if there's no string for the current language.
	 * @param {string} string - The string to get
	 */
	getString(string) {
		let localString = this.strings[this.language][string];
		let fallbackString = this.strings[this.fallbackLanguage][string]
		if (localString) {
			return localString;
		} else if (fallbackString) {
			return fallbackString;
		} else if (this.placeholderMode == true) {
			return string;
		} else {
			return undefined;
		}
	},

	/**
	 * Load strings to use for getString().
	 * @param stringPath - The string file to load
	 */
	loadStrings(stringPath) {
		const basePath = path.dirname(module.parent.filename);
		const fullPath = path.join(basePath, stringPath);
		this.strings = require(fullPath);
	},

	/**
	 * Sets the language to get strings in.
	 * @param {string} language - The language to get strings in
	 */
	setLanguage(language) {
		this.language = language;
	},

	/**
	 * Sets the fallback language.
	 * @param {string} language - The language that vukkyutils should fall back to
	 */
	setFallbackLanguage(language) {
		this.fallbackLanguage = language;
	},

	/**
	 * Toggles placeholder mode.
	 * @param {boolean} toggle - Toggle: true to enable, false to disable
	 */
	setPlaceholderMode(toggle) {
		this.placeholderMode = toggle;
	}
};

module.exports = vukkyutils;
