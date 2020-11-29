const vukkyutils = require("../lib")
vukkyutils.loadStrings("strings.json")

console.log("Getting NONEXISTENT_STRING in en")
vukkyutils.setLanguage("en")
vukkyutils.setPlaceholderMode(true)
console.log(`NONEXISTENT_STRING in en is ${vukkyutils.getString("NONEXISTENT_STRING")}`)