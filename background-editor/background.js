chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({bg: ""});
})

chrome.webNavigation.onCompleted.addListener(({ tabId, frameId }) => {
    if (frameId !== 0) return;
    chrome.scripting.executeScript({
        target: { tabId },
        function: newPageLoad,
    })
})

const newPageLoad = async () => {
    let { bg } = await chrome.storage.sync.get("bg");
    const STYLE = document.createElement("style");
    STYLE.innerText = `body { background: ${bg} !important; }`;
    document.head.appendChild(STYLE);
}