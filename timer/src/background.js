chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['assets/content.jsx-CKhAx6hs.js']
  })
})