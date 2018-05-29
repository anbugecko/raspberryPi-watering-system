var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO

var plant1 = {
    pump : new Gpio(7, 'out'), // definere hvilken raspberry pi pin Pump 1 er på
    sensor : new Gpio(11, 'in') // definere hvilken raspberry pi pin sensor 1 er på
};

var plant2 = {
    pump : new Gpio(4, 'out'), // definere hvilken raspberry pi pin Pump 2 er på
    sensor : new Gpio(17, 'in') // definere hvilken raspberry pi pin sensor 2 er på
};


function watering(pumpnr, sense)
{
    while (sense == 0 )
    {
        pumpnr.write(1); // denne setter gpio på pumpen High
    }
    pumpnr.write(0);
}    



if(plant1.sensor == 0){ 
        watering(plant1.pump, plant1.sensor);  //sjekker om sensor 1 er HIGH  eller LOW
    } 

    if(plant2.sensor == 0){ 
        watering(plant2.pump, plant2.sensor);  //sjekker om sensor 2 er HIGH eller LOW
    } 







//note to self 1
// 1 funksjon for vanning av plante -> feed plante nr og pumpnr til funksjon
//if funksjon for kall av funksjon

