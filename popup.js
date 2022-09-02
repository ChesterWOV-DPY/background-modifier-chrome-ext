const btn = document.querySelector("button");
let input = document.querySelector("input");

chrome.storage.sync.get("bg").then(val => {
    input.value = val.bg;
});

btn.addEventListener("click", () => {
    chrome.storage.sync.set({ bg: input.value });
    window.alert(`Successfully set background color to "${input.value}"!`);
});