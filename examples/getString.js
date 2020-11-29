const vukkyutils = require("../lib")
vukkyutils.loadStrings("strings.json")

console.log("Getting DEBUG_STRING in en")
vukkyutils.setLanguage("en")
console.log(`DEBUG_STRING in en is ${vukkyutils.getString("DEBUG_STRING")}`)

console.log("\nGetting DEBUG_STRING in no")
vukkyutils.setLanguage("no")
console.log(`DEBUG_STRING in no is ${vukkyutils.getString("DEBUG_STRING")}`)

console.log("\nGetting NOT_IN_NO in no, which isn't in no and will fallback to en")
console.log(`NOT_IN_NO in no is ${vukkyutils.getString("NOT_IN_NO")}`)