const CSS = {
  file: "/styles.css",
  allFrames: true,
  cssOrigin: "user"
  // runAt: "document_start"
};

let active = false;

browser.browserAction.onClicked.addListener(() => {
  if (active) {
    active = false;
    browser.tabs.removeCSS(CSS);
    browser.browserAction.setIcon({ path: "icons/inactive.svg" });
  } else {
    active = true;
    browser.tabs.insertCSS(CSS);
    browser.browserAction.setIcon({ path: "icons/active.svg" });
  }
});
