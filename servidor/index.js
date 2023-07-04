// Imports
const express = require('express');
var cors = require('cors');
const uuid = require('uuid');

// Configurações do server
const PORTA = 3000;
const app = express();

app.use(express.json());
app.use(cors())

// Middleware
const checkUserId = (request, response, next) => {
    const { id } = request.params;

    const index = users.findIndex(x => x.id === id);

    if(index < 0) return response.status(404).json({message: "Usuário não encontrado"});

    response.userId = id;
    response.userIndex = index;

    next();
}

// Métodos http
const users = [];

app.get("/users", (request, response) => {
    return response.send(users);
})

app.post("/users", (request, response) => {
    const {name, age} = request.body;
    const id = uuid.v4();

    const user = {id, name, age};

    users.push(user);

    return response.status(201).json(user);
})

app.put("/users/:id", checkUserId, (request, response) => {
    const { name, age } = request.body;

    const updatedUser = {id: response.userId, name, age};

    users[response.userIndex] = updatedUser;

    return response.status(200).json(updatedUser);
})

app.delete("/users/:id", checkUserId, (request, response) => {
    users.splice(response.userIndex, 1)

    return response.status(200).json({message: `Usuário excluído com sucesso.`});
})

app.listen(3001, () => {
    console.log("Server 👂👂 on 🚪🚪 3001!");
})