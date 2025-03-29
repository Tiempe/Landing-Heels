document.addEventListener('DOMContentLoaded', () => {
    const showIbanButton = document.getElementById('show-iban-button');
    const ibanDetailsDiv = document.getElementById('iban-details');

    // Verifica se gli elementi esistono prima di aggiungere l'event listener
    if (showIbanButton && ibanDetailsDiv) {
        showIbanButton.addEventListener('click', () => {
            // Mostra o nascondi i dettagli dell'IBAN
            if (ibanDetailsDiv.classList.contains('iban-details-hidden')) {
                ibanDetailsDiv.classList.remove('iban-details-hidden');
                ibanDetailsDiv.classList.add('iban-details-visible');
                showIbanButton.textContent = 'Nascondi Dettagli Bonifico'; // Cambia testo al bottone
            } else {
                ibanDetailsDiv.classList.add('iban-details-hidden');
                ibanDetailsDiv.classList.remove('iban-details-visible');
                showIbanButton.textContent = 'Mostra Dettagli per Bonifico'; // Ripristina testo bottone
            }
        });
    } else {
        console.warn("Elementi per il bonifico (bottone o div dettagli) non trovati.");
    }

    // Manteniamo lo smooth scroll per eventuali link interni (come quello nell'header)
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        // Assicuriamoci di non applicarlo a link senza ID valido
        if (link.getAttribute('href') !== '#' && document.querySelector(link.getAttribute('href'))) {
            link.addEventListener('click', function (e) {
                // Controlliamo se è il link dell'header che punta a #iscrizione
                if(this.closest('.hero') && this.getAttribute('href') === '#iscrizione') {
                    e.preventDefault();
                    document.getElementById('iscrizione').scrollIntoView({ behavior: 'smooth' });
                }
                // Potresti aggiungere altri casi qui se necessario
            });
        }
    });

});
