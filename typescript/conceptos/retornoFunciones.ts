
(() => {


    const sumar = (a: number, b: number): number => a + b;

    const nombre = ():string => 'Hola Jose';
    
    const obtenerSalario = ():Promise<string> => {
        return new Promise( (resolve, reject) => {
            resolve('OK');
        });
    }

    obtenerSalario().then( a => console.log(a.toUpperCase()));
    
})();