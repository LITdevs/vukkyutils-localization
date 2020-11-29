const vukkyutils = require("../lib")
vukkyutils.loadStrings("../examples/strings.json")

test('Placeholder mode works', () => {
    vukkyutils.setPlaceholderMode(true)
    expect(vukkyutils.getString("NONEXISTENT_STRING")).toBe("NONEXISTENT_STRING");

    vukkyutils.setPlaceholderMode(false)
    expect(vukkyutils.getString("NONEXISTENT_STRING")).toBe(undefined);
});