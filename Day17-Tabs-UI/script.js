function openTab(event, tabId) {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => tab.classList.remove("active"));
    contents.forEach(content => content.classList.remove("active"));

    event.target.classList.add("active");
    document.getElementById(tabId).classList.add("active");
}
