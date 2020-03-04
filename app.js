const  mysql = require('mysql');


var conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Venus#88',
    database: 'serpiente'
});

conexion.connect(err => {
    if (err) throw err;
    console.log('conexion correcta');
});


// Traer Datos 
 conexion.query('SELECT * FROM jugador', (err, results, campos) => {
    if (err) throw err;
    
    results.forEach(result => {
        console.log(result);
    });
}); 

//Insertar Datos
// proteccion a insertar datos 
conexion.query('INSERT INTO jugador(username, password, puntuaje) VALUES (?, ?, ?)', ['Ana', '1235', 20], (err, resultado) => {
    if (err) throw err;
    console.log(resultado);
}); 

// Actualizar Datos
 conexion.query('UPDATE jugador SET password = "012345" WHERE username = "Liz"',(err, resultado) => {
    if (err) throw err;
    console.log(resultado);
}); 


// ELIMINAR DATOS
conexion.query('DELETE FROM jugador WHERE username="Compean"', (err, resultado) => {
    if (err) throw err;
    console.log(resultado);
});





conexion.end();

