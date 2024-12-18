const request = require('supertest');
const app = require('../app');
const req = require('express/lib/request');

describe("ToDoLIst Api Tests", () => {
    //test du get vide
    it("devrait retourner une liste vide au départ", async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200); 
        expect(response.body.tasks).toEqual([]);
    })

    it("devrait ajouter une nouvelle tâche", async () => {
        const response = await request(app)
        .post('/add-task')
        .send({task : {id :0, task:"tâche de test"}});
        expect(response.statusCode).toBe(200);
        expect(response.body.tasks).toContain('tâche de test')

    })
})