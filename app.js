const Doctor    = require("./models/Doctor");
const Hunter    = require("./models/Hunter");
const Traveler  = require("./models/Traveler");
const Wagon     = require("./models/Wagon");

let cacador = new Hunter()
let viajante = new Traveler();
let carroca = new Wagon();
let doutor = new Doctor()


let doutorDionizio = new Doctor

let cacadorMario = new Hunter();
let cacadorMarcim = new Hunter();

let viajanteSergio = new Traveler();
let viajanteSimone = new Traveler();
let viajanteSamuel = new Traveler();
let viajanteSandra = new Traveler();
let viajanteJoão   = new Traveler();
let viajanteDiego  = new Traveler();
let viajanteDiana  = new Traveler();

module.exports = {
    viajante,
    carroca,
    cacador,
    doutor,
}