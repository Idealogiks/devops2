const request = require('supertest');
const app = require('./server.js');

describe("ToDoList API Tests", () => {
    beforeEach(() => {
        tasks = [];
    });

    it("devrait retourner une liste vide au départ", async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.body.tasks).toEqual([]);
    });

    it("devrait ajouter une nouvelle tâche", async () => {
        const newTask = { id: 0, task: "tâche de test" };
        const response = await request(app)
            .post('/add-task')
            .send({ task: newTask });
        expect(response.statusCode).toBe(200);
        expect(response.body.tasks).toContainEqual({
            id: 0,
            task: newTask
        });
    });

    it("devrait supprimer une tâche", async () => {
        const response = await request(app).delete('/').query({ id: 0 });
        expect(response.statusCode).toBe(200);
        expect(response.body.tasks).toEqual([]);
    });
});
