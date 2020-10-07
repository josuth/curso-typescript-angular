
(() => {
    
   console.log('Inicio');

   // Se define la promesa
   const prom1 = new Promise( (resolve, reject) => {
        setTimeout(() => {
            // Esto termina la promes OK y devuelve un mensaje
            //resolve('Se terminó el timeout')
            // Esto termina la promesa en error y devuelve un mensaje
            reject('Se termino el timeout. ERROR!!');
        }, 1000);
   });

   // Se lanza la promesa
   prom1.then(mensaje => console.log(mensaje))
       .catch( err => console.warn(err));


   console.log('Fin');
    
})();