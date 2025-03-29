document.addEventListener('DOMContentLoaded', () => {
    // Non c'è più un form da gestire per l'invio a WhatsApp

    // Manteniamo lo smooth scroll per il pulsante nell'header
    const heroButton = document.querySelector('.hero .cta-button');
     if(heroButton && heroButton.getAttribute('href') === '#iscrizione') {
         heroButton.addEventListener('click', function(e) {
             e.preventDefault();
             document.getElementById('iscrizione').scrollIntoView({ behavior: 'smooth' });
         });
     }

     // Altre eventuali interazioni future potrebbero andare qui
     console.log("Pagina Heels Dance caricata. Nessun form attivo.");

});
