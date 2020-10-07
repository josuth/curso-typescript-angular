
(() => {
    
    // Desestructuración de objeto
    const avenger = {
        nombre: 'Steve',
        clave: 'Capitán América',
        poder: 'Droga'
    }

    const { nombre, clave, poder } = avenger;

    console.log( nombre );
    console.log( clave );
    console.log( poder );

    console.log( "-----------------" );

    // Desestructuración array
    const avengers: string[] = ['Thor', 'Ironman', 'Spiderman'];

    const [uno, , tres] = avengers;
    console.log( uno );
    //console.log( dos );
    console.log( tres );
    
})();