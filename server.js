const express = require('express');
const app = express();
app.use(express.json())
let tasks = [];

app.get('/', (req, res) => {
    res.send({tasks});
});

app.delete('/', (req, res) => {
    const idToDelete = req.params.id;
}
)

app.post('/add-task', (req, res)=>{
    const newTask = req.body.task; 
    if(newTask){
        tasks.push(newTask);
    }
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur lancé`);
});
