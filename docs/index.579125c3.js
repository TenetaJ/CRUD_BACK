document.addEventListener("DOMContentLoaded", function() {
    const content = document.querySelector(".content");
    let itemsPerPage = 3;
    let currentPage = 0;
    const items = Array.from(content.getElementsByTagName("tr")).slice(1);
    function showPage(page) {
        const startIndex = page * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        items.forEach((item, index)=>{
            item.classList.toggle("hidden", index < startIndex || index >= endIndex);
        });
        updateActiveButtonStates();
    }
    function updateActiveButtonStates() {
        const pageButtons = document.querySelectorAll(".pagination button");
        pageButtons.forEach((button, index)=>{
            if (index === currentPage) button.classList.add("active");
            else button.classList.remove("active");
        });
    }
    const selectElement = document.getElementById("count_per_page");
    selectElement.addEventListener("change", function() {
        itemsPerPage = parseInt(this.value);
        showPage(currentPage);
        createPageButtons();
    });
    // Створюємо контейнер для пагінації
    const paginationContainer = document.createElement("div");
    paginationContainer.classList.add("pagination");
    content.appendChild(paginationContainer);
    function createPageButtons() {
        const totalPages = Math.ceil(items.length / itemsPerPage);
        while(paginationContainer.firstChild)paginationContainer.removeChild(paginationContainer.firstChild);
        for(let i = 0; i < totalPages; i++){
            const pageButton = document.createElement("button");
            pageButton.textContent = i + 1;
            pageButton.addEventListener("click", ()=>{
                currentPage = i;
                showPage(currentPage);
                updateActiveButtonStates();
            });
            paginationContainer.appendChild(pageButton);
        }
    }
    createPageButtons();
    showPage(currentPage);
});

//# sourceMappingURL=index.579125c3.js.map
