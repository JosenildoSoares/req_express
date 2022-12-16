const express = require ('express');//Importando a biblioteca express 
const app = express (); //Armazenando na váriavel app

app.get ('/', (req, res) =>{  // Consulta os dados
    return res.send ("Método get") 
});

app.post('/', (req, res) =>{ // Recebe os dados
    return res.send ("Método post")
});

app.delete('/', (req, res) => { // Deleta os dados
    return res.send ("Método delete")
});

app.put('/', (req, res) =>{ // Altera os dados
    return res.send ("Método put")
});

app.listen(8080, () =>{ // Local onde será iniciado o servidor
    console.log ("Servidor iniciado na porta 8080")
});