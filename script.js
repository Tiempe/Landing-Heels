document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const formMessage = document.getElementById('form-message');

    // --- CONFIGURAZIONE ---
    // !!! SOSTITUISCI QUESTO CON IL TUO NUMERO DI TELEFONO REALE !!!
    // Includi il prefisso internazionale SENZA il '+' o '00'
    // Esempio: per l'Italia +39 3331234567 diventa 393331234567
    const yourWhatsAppNumber = '39XXXXXXXXXX'; // <--- METTI QUI IL TUO NUMERO!
    // ---------------------

    if (!form) {
        console.error("Errore: Modulo non trovato.");
        return;
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impedisce l'invio standard del modulo

        formMessage.textContent = ''; // Pulisce messaggi precedenti
        formMessage.className = 'form-message'; // Resetta classi CSS

        const nameInput = document.getElementById('name');
        const phoneInput = document.getElementById('phone');

        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();

        // Validazione semplice
        if (!name || !phone) {
            displayMessage('Per favore, compila entrambi i campi.', 'error');
            return;
        }

        // Validazione base del numero (può essere migliorata se necessario)
        if (!/^[0-9]{8,15}$/.test(phone)) {
             displayMessage('Per favore, inserisci un numero di telefono valido.', 'error');
             return;
        }

        if (!yourWhatsAppNumber || yourWhatsAppNumber === '39XXXXXXXXXX') {
             displayMessage('Errore: Numero WhatsApp non configurato nello script.js!', 'error');
             console.error("ERRORE: Devi impostare 'yourWhatsAppNumber' nel file script.js!");
             return;
        }

        // Creazione del messaggio pre-compilato per WhatsApp
        const messageText = `Ciao! Vorrei iscrivermi al corso di Heels Dance del 10 Aprile a Roma.\n\nNome: ${name}\nNumero: ${phone}`;

        // Codifica il messaggio per l'URL
        const encodedMessage = encodeURIComponent(messageText);

        // Creazione del link WhatsApp
        // Usiamo wa.me che è più universale e funziona anche da desktop
        const whatsappURL = `https://wa.me/${yourWhatsAppNumber}?text=${encodedMessage}`;

        // Informa l'utente e apri WhatsApp
        displayMessage('Stai per essere reindirizzato a WhatsApp per inviare la richiesta...', 'success');

        // Apri il link WhatsApp in una nuova scheda/app dopo un breve ritardo
        setTimeout(() => {
            window.open(whatsappURL, '_blank');
             // Potresti voler resettare il form qui, o lasciare i dati inseriti
             // form.reset();
             // displayMessage('Richiesta inviata a WhatsApp! Completa l\'invio del messaggio.', 'success');
        }, 1500); // Attendi 1.5 secondi prima di reindirizzare

    });

    function displayMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`; // Aggiunge la classe 'success' o 'error'
    }

     // Smooth scroll per il pulsante nell'header
     const heroButton = document.querySelector('.hero .cta-button');
     if(heroButton && heroButton.getAttribute('href') === '#iscrizione') {
         heroButton.addEventListener('click', function(e) {
             e.preventDefault();
             document.getElementById('iscrizione').scrollIntoView({ behavior: 'smooth' });
         });
     }
});
