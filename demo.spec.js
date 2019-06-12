const fs = require("fs");

describe("Protractor Demo App", () => {
    it("Should see Pitney Bowes title", async () => {
        browser.get("https://designerui.converse.pitneybowes.com/");

        await browser.driver.wait(() => {
            return browser.driver.getCurrentUrl().then((url) => {
                return /login2\.pitneybowes\.com/.test(url);
            });
        }, 10000);

        browser.takeScreenshot().then((data) => {
            const now = new Date().toISOString().slice(0, 19);
            const stream = fs.createWriteStream("screenshoots/screenshoot_" + now + ".png");
            stream.write(Buffer.from(data, "base64"));
            stream.end();
        });

        expect(browser.getTitle()).toEqual("Pitney Bowes");
    });
});
