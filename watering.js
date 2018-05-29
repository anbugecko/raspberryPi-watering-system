var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO

var plant1 = {
    pump = new Gpio(4, 'out'), // definere hvilken raspberry pi pin Pump 1 er på
    sensor = new Gpio(17, 'in') // definere hvilken raspberry pi pin sensor 1 er på
}

var plant2 = {
    pump = new Gpio(4, 'out'), // definere hvilken raspberry pi pin Pump 2 er på
    sensor = new Gpio(17, 'in') // definere hvilken raspberry pi pin sensor 2 er på
}


    if(plant1.sensor = 0){ 
        watering(plant1.pump, plant1.sensor);  //sjekker om sensor 1 er HIGH  eller LOW
    } else {
        dry(plant1.pump)
    }

    if(plant2.sensor = 0){ 
        watering(plant2.pump, plant2.sensor);  //sjekker om sensor 2 er HIGH eller LOW
    } else {
        dry(plant2.pump)
    }




    function watering(pumpnr, sense)
    {
        while (sense == 0 )
        {
            return pumpnr.write(1) // denne setter gpio på pumpen High
        }
        
    }

    function dry(pumpnr){
        return pumpnr.write(0) // denne setter gpio på pumpen Low
    }



//note to self
// 1 funksjon for vanning av plante -> feed plante nr og pumpnr til funksjon
//if funksjon for kall av funksjon