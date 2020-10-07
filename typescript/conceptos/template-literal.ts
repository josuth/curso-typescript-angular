
(function (){
    
    function getEdad()    {
        return 100 + 100;
    }

    const nombre = "Jose";
    const apellido = "Torralba";
    const edad = 38;

    //const salida = nombre + " " + apellido + " (Edad: " + edad + ")";
    const salida = `${nombre} ${apellido} (Edad: ${edad})`;
    console.log(salida);

    const salidalineas = `
    ${nombre} 
    ${apellido} 
    (Edad: ${edad})`;       
    console.log(salidalineas);

    const salidaOps = `${edad + 100}`;
    console.log(salidaOps);

    const salidaFunc = `${getEdad()}`;
    console.log(salidaFunc);
})();