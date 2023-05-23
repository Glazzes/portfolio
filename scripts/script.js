document.addEventListener("DOMContentLoaded", () => {
    const loadMoreButton = document.getElementById("load-more");
    const hiddenProjects = document.getElementsByName("hidden-project")

    loadMoreButton.addEventListener("click", () => {
        loadMoreButton.style.display = "none";
        
        for(let project of hiddenProjects) {
            project.style.display = "inline";
        }
    });
});
