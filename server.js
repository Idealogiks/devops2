const express = require('express');
const app = express();
app.use(express.json());
let tasks = [];

app.get('/', (req, res) => {
    res.send({ tasks });
});

app.delete('/', (req, res) => {
    const idToDelete = parseInt(req.query.id, 10); 
    if (idToDelete >= 0 && idToDelete < tasks.length) {
        tasks.splice(idToDelete, 1);
        res.status(200).json({ tasks });
    } else {
        res.status(400).send("Id incorrect");
    }
});

app.post('/add-task', (req, res) => {
    const newTask = req.body.task; 
    if (newTask) {
        tasks.push(newTask);
    }
    res.status(200).json({ tasks });
});

module.exports = app; 

const PORT = 3000;
if (require.main === module) {  
    app.listen(PORT, () => {
        console.log(`Serveur lancé sur le port ${PORT}`);
    });
}
