
(() => {

    // De esta forma no tenemos manera de saber si xmen tiene un atributo nombre
    //const enviarMision = ( xmen: any ) => {
    
    // De esta forma si estamos diciendo que aceptamos un objeto ({}) con un atributo llamado nombre
    // pero no es algo reutilizable, si el objeto wolverine cambia el atributo nombre, habrá que cambiarlo
    // en esta función y en todos los lugares donde se utilice
    //const enviarMision = ( xmen: {nombre:string} ) => {

    // Definir una interfaz soluciona estos problemas
    interface Xmen {
        nombre: string;
        edad: number;
        poder?: string;
    }

    const enviarMision = ( xmen: Xmen ) => {
        console.log(`Enviando a ${xmen.nombre} a la mision`);
    }

    const regresarAlCuartel = ( xmen: Xmen ) => {
        console.log(`Regresando ${xmen.nombre} al cuartel`);
    }

    const wolverine:Xmen = {
        nombre: 'Logan',
        edad: 60
    }

    enviarMision( wolverine );
    regresarAlCuartel( wolverine );
    
})();