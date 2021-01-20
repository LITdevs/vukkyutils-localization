const vukkyutils = require("../lib")

test('Loading strings works', () => {
    vukkyutils.setLanguage("en")
    vukkyutils.setSplitLanguagesMode(true)
    vukkyutils.setSplitLanguagesLocation("../examples/splitLanguages")
    expect(vukkyutils.strings).toBe(require("../examples/splitLanguages/en.json"));
});

test('Fallback language works', () => {
    vukkyutils.setFallbackLanguage("no")
    expect(vukkyutils.getString("NOT_IN_EN")).toBe("Something in Norwegian");
});

test('DEBUG_STRING in en is Something in English', () => {
    vukkyutils.setLanguage("en")
    expect(vukkyutils.getString("DEBUG_STRING")).toBe("Something in English");
});

test('DEBUG_STRING in no is Something in Norwegian', () => {
    vukkyutils.setLanguage("no")
    expect(vukkyutils.getString("DEBUG_STRING")).toBe("Something in Norwegian");
});

test('NOT_IN_NO in no is Something in English', () => {
    vukkyutils.setLanguage("no")
    vukkyutils.setFallbackLanguage("en")
    expect(vukkyutils.getString("NOT_IN_NO")).toBe("Something in English");
});