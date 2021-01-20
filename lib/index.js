const path = require("path");
const util = require('util'); 

const vukkyutils = {
	strings: {},
	language: "en",
	fallbackLanguage: "en",
	placeholderMode: false,
	splitLanguagesMode: false,
	splitLanguagesLocation: null,

	/**
	 * Gets a string from the loaded strings in the set language. Falls back to the fallback language if there's no string for the current language.
	 * @param {string} string - The string to get
	 */
	getString(string) {
		if(this.splitLanguagesMode == true && this.splitLanguagesLocation == null) throw "You haven't set the split languages location."
		let localString = this.splitLanguagesMode ? this.strings[string] : this.strings[this.language][string];
		let fallbackString = this.splitLanguagesMode ? this.getStrings(`${this.splitLanguagesLocation}\\${this.fallbackLanguage}.json`)[string] : this.strings[this.fallbackLanguage][string]
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
	 * Gets strings.
	 * @param stringPath - The string file to get
	 */
	getStrings(stringPath) {
		const basePath = path.dirname(module.parent.filename);
		const fullPath = path.join(basePath, stringPath);
		return require(fullPath);
	},

	/**
	 * Sets the language to get strings in.
	 * @param {string} language - The language to get strings in
	 */
	setLanguage(language) {
		this.language = language;
		if(this.splitLanguagesMode == true) this.loadStrings(`${this.splitLanguagesLocation}\\${this.language}.json`)
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
	},

	/**
	 * Toggles split languages mode.
	 * @param {boolean} toggle - Toggle: true to enable, false to disable
	 */
	setSplitLanguagesMode(toggle) {
		this.splitLanguagesMode = toggle;
	},

	/**
	 * Sets the location for split languages. This will load strings for you, in the LOCATION\CURRENTLANGUAGE.json format.
	 * @param {string} location - Toggle: true to enable, false to disable
	 */
	setSplitLanguagesLocation(location) {
		this.splitLanguagesLocation = location;
		this.loadStrings(`${location}\\${this.language}.json`)
	}
};

module.exports = vukkyutils;
