// debug
// alert("Questo e boolzap");


// struttura base vue.js


const { createApp} = Vue;

createApp({
    data() {
        return{
            // array di oggetti
            contacts: [
                {
                name: 'Michele',
                avatar: './img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:30:50',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent',
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto',
                        status: 'received',
                    },
                ],
            },
            {
                name: 'Fabio',
                avatar: './img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent',
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                    },
                ],
            },
            {
                name: 'Samuele',
                avatar: './img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'Marianna va in campagna',
                        status: 'received',
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliati chat?',
                        status: 'sent',
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received',
                    },
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: './img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                    },
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: './img/avatar_5.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent',
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received',
                    },
                ],
            },
            {
                name: 'Claudia',
                avatar: './img/avatar_6.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent',
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received',
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova buona notizia',
                        status: 'sent',
                    },
                ],
            },
            {
                name: 'Federico',
                avatar: './img/avatar_7.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent',
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received',
                    },
                ],
            },
            {
                name: 'Davide',
                avatar: './img/avatar_8.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No l\'ho gia mangiata ieri, ordianiamo cinghiale',
                        status: 'sent',
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received',
                    }
                ],
            }

            ],

            // prova per generare una lista di risposte automatiche ??
            // risposteAuto: [
            //     'ok',
            //     'Ciao',
            //     'Come stai',
            //     'Stasera ho prenotato al Chiaro di Luna',
            //     'Conferma la presenza per la partita di calcio',
            //     'Proviamo a studiare assieme',
            //     'Stiamo per andare al mare',
            //     'Ho preparato tutto'
            // ],


            selectedContact: 0, // variabile che traccia il contatto attivo
            newMessage: '', // variabile che tiene traccia dei nuovi messaggi
            searchContact : '', // variabile per tracciare i contatti che cerchiamo
        };
    },
    methods: {
        select(index) {
            this.selectedContact = index;  // richiamo la funzione per mostrare al click il contatto attivo
        },
        // metodo per inviare un nuovo messaggio
        sendMessage() {
            // controllo se il campo messaggio non e vuoto
            if(this.newMessage.trim() !== ''){
                // pusch del nuovo messaggio alla lista dei messaggi
                this.contacts[this.selectedContact].messages.push({
                    message: this.newMessage,
                    // stato del messaggio inviato
                    status: 'sent',
                });
                // pulisco il campo del messaggio dopo l'invio
                this.newMessage ='';
                // richiamo la funzione
                this.autoReplay();
            }
        },
        // set timeout arrow function per generare una risposta automatica
        autoReplay () {
            setTimeout(() => {
                // tengo traccia dell'indice dei contatti e aggiungo la nuova risposta all'array dei messaggi
                this.contacts[this.selectedContact].messages.push({
                    message: 'ok',
                    status: 'received',
                });

            }, 1000); // 1 secondo rappresentato in millesecondi
        },

        // metodo per filtrare i contatti in base alla ricerca
        filterContact () {
            // questa condizione fa si che in caso la stringa e vuota mi restitusce tutti i contatti
            if (this.searchContact.trim() === '') {
                return this.contacts;
            }
            // con questa condizione restituisco il contatto che sto cercando
            return this.contacts.filter(contact =>
                // utilizzato il toLowerCase per convertire i caratteri in minuscolo 
                contact.name.toLowerCase().includes(this.searchContact.toLowerCase())
            );
        }

    },
}).mount('#app');