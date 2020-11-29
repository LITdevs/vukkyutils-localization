# vukkyutils
Random utilities made by Vukky, mainly for use in Vukky projects.

## Usage
### Localization

```javascript
const vukkyutils = require("vukkyutils")
vukkyutils.loadStrings("strings.json")
vukkyutils.setLanguage("en")

console.log(`DEBUG_STRING in en is ${vukkyutils.getString("DEBUG_STRING")}`)
```

```json
{
    "en": {
        "DEBUG_STRING": "Something in English"
    }
}
```

Output: `DEBUG_STRING in en is Something in English`


#### Placeholder mode
```javascript
const vukkyutils = require("vukkyutils")
vukkyutils.loadStrings("strings.json")
vukkyutils.setLanguage("en")
vukkyutils.setPlaceholderMode(true)

console.log(`QUIZ_TITLE_1205 in en is ${vukkyutils.getString("QUIZ_TITLE_1205")}`)
```

```json
{
    "en": {
        "DEBUG_STRING": "Something in English"
    }
}
```

Output: `QUIZ_TITLE_1205 in en is QUIZ_TITLE_1205`