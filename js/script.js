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
            emails: [],
        }
    },

    // al acricamento della pagina volgio che mi prenda le mail
    mounted(){
        for( let i = 0 ; i < 10; i++ ) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                    
                    // salvo la mail nei miei data
            /* if(result.data.length <= 10){
    
                this.emails = result.data.response;
            } */
              this.emails.push(result.data.response); 
            });
            console.log(this.emails)

        };
        
    }
}).mount('#app')