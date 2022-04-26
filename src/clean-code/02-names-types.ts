(() => {

    const temperaturesCelsius = [33.6, 12.34];
    const serverIp = '123.123.123.123';
    const users = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    // Listado de emails de los usuarios
    const userEmails  = users.map( user => user.email );

    // Variables booleanas de un video juego
    const canJump = false;
    const isRun = true;
    const hasItems = true;
    const isLoading = false;

    // Other Exercises
    // first time
    const startTime = new Date().getTime();
    //....
    // 3 doritos later
    //...
    // last time
    const endTime = new Date().getTime() - startTime;


    // function
    // Obtiene los libros
    function getBooks() {
        throw new Error('Function not implemented.');
    }

    // obtiene libros desde un URL
    function getBooksByUrl( url: string) {
        throw new Error('Function not implemented.');
    }
    
    // obtiene el área de un cuadrado basado en sus lados
    function getSquareAreaBySides( side: number ) {
        throw new Error('Function not implemented.');
    }

    // imprime el trabajo
    function printJob() {
        throw new Error('Function not implemented.');
    }


})();