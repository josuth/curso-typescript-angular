
(() => {

    // Versión clásica
    // class Avenger {
    //     nombre: string;
    //     equipo: string = 'Capi';
    //     nombreReal?: string;
    //     puedePelear?: boolean;
    //     peleasGanadas: number = 0;

    //     constructor( nombre: string, equipo: string )    {
    //         this.nombre = nombre;
    //         this.equipo = equipo;
    //     }
    // }

    // Versión reducida
    class Avenger {
        constructor( public nombre: string,
                     public equipo: string,
                     public nombreReal?: string,
                     public puedePelear?: boolean,
                     public peleasGanadas: number = 0) { }
    }
    
    const antman: Avenger = new Avenger('Antman', 'Capitán');
    console.log(antman);
    
})();