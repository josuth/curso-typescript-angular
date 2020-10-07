
(function (){
    
    // Argumentos obligatorios: 'quien'
    // Argumentos opcionales: momento
    // Argumentos con valor por defecto: 'objeto'
    // El orden debería ser: 1.obligatorios, 2.opcionales, 3.por defecto
    function activar( quien   : string, 
                      momento?: string,              
                      objeto  : string = 'batiseñal' )    {

        if (momento)    {
            console.log(`${quien} activó la ${objeto} en la ${momento}`);
        } else {
            console.log(`${quien} activó la ${objeto}`);
        }
    }

    activar('Gordon');

    activar('Gordon', 'tarde');

    activar('Gordon', 'tarde', 'linterna');
    
})();