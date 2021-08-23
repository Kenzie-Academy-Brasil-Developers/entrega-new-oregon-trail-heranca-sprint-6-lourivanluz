const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const Traveler = require("./../../models/Traveler")
const { doutor } = require("./../../app");

const juninho = new Traveler('juninho')


//GIVE
Given('um Doctor de nome {string}', function (string) {
    doutor.name = string;
});

Given('ele começa a viagem com {int} refeição', function (int) {
    doutor.food = int
});

Given('ele inicia a viagem saudável sempre.', function () {
    doutor.isHealthy = true
});

//WHEN
When('o Doctor para pra comer {int} vezes', function (int) {
    for (let contador = 0; contador < int; contador++) {
        doutor.eat();
    }
});

When('recuperou a saude de um viajante', function () {
    doutor.heal(juninho)
});

When('o Doctor para pra caçar {int} vezes', function (int) {
    for(let contador = 0; contador<int; contador++){
        doutor.hunt()
    }
});

//THEN
Then('a quantidade de refeiçoes deve ser igual {int}', function (int) {
    assert.strictEqual(doutor.food, int);
});

Then('Doctor ficará saudável', function () {
    assert.strictEqual(doutor.isHealthy, true)
});

Then('Traveler ficará saudável', function () {
    assert.strictEqual(juninho.isHealthy, true)
});

Then('Doctor ficará doente', function () {
    assert.strictEqual(doutor.isHealthy, false)
});