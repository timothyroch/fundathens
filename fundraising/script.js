document.addEventListener('DOMContentLoaded', () => {
    // Ajout d'un défilement fluide pour tous les liens internes
    const liens = document.querySelectorAll('a[href^="#"]');
    liens.forEach(lien => {
      lien.addEventListener('click', function(e) {
        e.preventDefault();
        const idCible = this.getAttribute('href').substring(1);
        const cible = document.getElementById(idCible);
        if (cible) {
          cible.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
    
    console.log("Script chargé : page de collecte de fonds en français.");
  });
  