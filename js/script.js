/* 
Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista (non ci interessa che siano tutti diversi).
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

const { createApp } = Vue

createApp({
    data(){
        return{
            emails: null,
        }
    },

    // al acricamento della pagina volgio che mi prenda le mail
    mounted(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(() => {
            
        });
        
    }
}).mount('#app')