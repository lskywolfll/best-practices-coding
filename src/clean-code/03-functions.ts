(() => {
    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    function getAllMovieActors( movieId: string ) {
        console.log({ movieId });
    }

    function getBioByActor( ActorId: string ) {
        console.log({ ActorId });
    }
    
    interface Movie {
        cast: string[];
        description: string;
        rating: number;
        title: string;
    }

    function createMovie({title ,description, rating, cast}: Movie) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        
    }

})();
