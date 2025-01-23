document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loader');
    const loadertext = document.querySelector('.loader-text');
    const mainpanel = document.querySelector('.mainpanel');
    
    
    // Gérer le clic sur le texte du loader
    loadertext.addEventListener('click', (event) => {
        event.preventDefault();
        loadertext.style.display = 'none';
        // Attendre 5 secondes avant d'afficher le contenu principal
        setTimeout(() => {
            loader.style.display = 'none'; // Masquer le loader
            mainpanel.style.display = 'grid'; // Afficher le panneau principal
        }, 3000); // 5000 millisecondes = 5 secondes
    
    });
});
