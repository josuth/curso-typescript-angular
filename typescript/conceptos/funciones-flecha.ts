
(function (){
    
    const miFuncion = function( a: string )    {
        return a.toUpperCase();
    }

    const miFuncionF = ( a:string ) => a.toUpperCase();
    console.log( miFuncion('Normal'));
    console.log( miFuncionF('Flecha'));


    const sumarN = function(a:number, b:number)    {
        return a + b;
    }
    const sumarF = (a:number, b:number) => a+b;
    console.log(sumarN(2, 5));
    console.log(sumarF(2, 5));
    


    // Fijarse en que el uso de => no añade un ambito nuevo (como lo hace function)
    // Las funciones de flecha no modifican a lo que apunta 'this'
    // Cuando no usamos '=>', se abre un ambito nuevo en 'function'
    const hulk = {
        nombre: 'Hulk',        
        smasherror() {
            setTimeout( function() {
                console.log(`${ this.nombre } smash!!!`);
            }, 1000)
        },
        smash() {
            setTimeout( () => {
                console.log(`${ this.nombre } smash!!!`);
            }, 1000);            
        }
    }

    hulk.smash();
})();