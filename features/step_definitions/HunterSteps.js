const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const Traveler = require("./../../models/Traveler")
const { cacador } = require("./../../app");

const juninho = new Traveler('juninho')

Given('um Hunter de nome {string}', function (string) {
    cacador.name = string;
});

Given('ele inicia a viagem com {int} refeição', function (int) {
    cacador.food = int
});

Given('ele começa a viagem saudável sempre.', function () {
    cacador.isHealthy = true
});

/** WHEN */

When('o Hunter sair para caçar {int} vezes', function (int) {
    for (let contador = 0; contador < int; contador++) {
        cacador.hunt();
    }
});

When('o Hunter parar para comer {int} vezes', function (int) {
    for (let contador=0; contador < int; contador++) {
        cacador.eat();
    }
});

When('dou {int} refeicão para outro Traveler', function (int) {
    cacador.giveFood(juninho,int)
});

/** THEN */

Then('a quantidade de refeiçoes deve ser igual a {int}', function (int) {
    assert.strictEqual(cacador.food, int);
});


Then('o Hunter não ficará doente', function () {
    assert.strictEqual(cacador.isHealthy, true)
});

Then('o Hunter ficará doente', function () {
    assert.strictEqual(cacador.isHealthy, false)
});

Then('a quantidade de refeiçoes do caçador deve ser {int}', function (int) {
    assert.strictEqual(cacador.food, int)
});

Then('a quantidade de refeicao do Traveler deve ser {int}', function (int) {
    assert.strictEqual(juninho.food, int)
});