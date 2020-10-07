
(() => {
    
    const retirarDinero = (montoRetirar:number): Promise<number> => {
    // La misma función definida sin indicar el tipo de retorno
    //const retirarDinero = (montoRetirar:number) => {

        console.log('Inicio');
        let dineroActual = 1000;
        
        return new Promise( (resolve, reject) => {
            if (montoRetirar > dineroActual)    {
                reject('No hay suficientes fondos');
            } else {
                dineroActual -= montoRetirar;
                resolve(dineroActual);
            }
        });
    }

   retirarDinero(1500)
       .then(montoActual => console.log(`Me queda ${montoActual}`))
       .catch(console.log);
       // La linea anterior es lo mismo que esta de abajo
       //.catch(err => console.warn(err));
    
})();