const express = require('express');
const app = express();
app.use(express.json());
let tasks = [];

app.get('/', (req, res) => {
    res.send({ tasks });
});

app.post('/add-task', (req, res) => {
    const newTask = req.body.task;
    const id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 0; 
    if (newTask) {
        tasks.push({ id, task: newTask }); 
        res.status(200).json({ tasks });
    } else {
        res.status(400).send("Task is required");
    }
});

app.delete('/', (req, res) => {
    const idToDelete = parseInt(req.query.id, 10);
    const taskIndex = tasks.findIndex(task => task.id === idToDelete); 

    if (taskIndex >= 0) {
        tasks.splice(taskIndex, 1);
        res.status(200).json({ tasks });
    } else {
        res.status(400).send("Id incorrect");
    }
});

module.exports = app;

const PORT = 3000;
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Serveur lancé sur le port ${PORT}`);
    });
}
