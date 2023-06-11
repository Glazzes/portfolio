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

const spanish = {
    "greeting": "¡Hola! Soy Santiago 👋",
    "build": "creo aplicaciones",
    "app-type": " moviles & backend",
    "subtitle": "Amo el reto conceptual de convertir ideas en realidad. Tengo un gran deseo de sobresalir y seguir mejorando como desarrollador de software.",
    "view-projects": "Ver proyectos",
    "available": "Disponible"
}
