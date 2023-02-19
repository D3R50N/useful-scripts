/**
 * @returns l'onglet actif de chrome
 */
async function getCurrentTab() {
  let queryOptions = {
    active: true,
    lastFocusedWindow: true,
  };

  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}
getCurrentTab().then((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: main,
    });
});

function main() {
  
}