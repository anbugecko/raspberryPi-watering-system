// will only use ES6..
"use strict";

// can we resolve module 'onoff'?
try {
    console.log(require.resolve('onoff'));
} catch (e) {
    console.error('onoff is not found');
    process.exit(e);
}

try {
    console.log(require.resolve('mqtt'));
} catch (e) {
    console.error('mqtt is not found');
    process.exit(e);
}

// load module in scope..
const Gpio = require('onoff').Gpio;
var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://192.168.1.3')

// properties to define GPIO pin for pumps and sensors
const plantA = {
    name: "Plant A",
    pump: new Gpio(2, 'out'),
    sensor: new Gpio(14, 'in')
};

const plantB = {
    name: "Plant B",
    pump: new Gpio(3, 'out'),
    sensor: new Gpio(15, 'in')
};

const plantC = {
    name: "Plant C",
    pump: new Gpio(4, 'out'),
    sensor: new Gpio(18, 'in')
};


const plantD = {
    name: "Plant D",
    pump: new Gpio(17, 'out'),
    sensor: new Gpio(23, 'in')
};


const plantE = {
    name: "Plant E",
    pump: new Gpio(27, 'out'),
    sensor: new Gpio(24, 'in')
};


const plantF = {
    name: "Plant F",
    pump: new Gpio(22, 'out'),
    sensor: new Gpio(25, 'in')
};

const plantG = {
    name: "Plant G",
    pump: new Gpio(10, 'out'),
    sensor: new Gpio(8, 'in')
};

const plantH = {
    name: "Plant H",
    pump: new Gpio(9, 'out'),
    sensor: new Gpio(7, 'in')
};


function watering(pump, sensor) 
{
    while (sensor.read === 0) {
        pump.write(1);
    }
    pump.write(0);
}

 


function checkSensorSate() {
    if (plantA.sensor.read === 0) {
        watering(plantA.name, plantA.pump, plantA.sensor);
        
        client.on('connect', function () {
            client.publish(plantA.name, '1')
            client.end()
          })

    } else if (plantB.sensor.read === 0) {
        watering(plantB.name, plantB.pump, plantB.sensor);

        client.on('connect', function () {
            client.publish(plantB.name, '1')
            client.end()
          })

    } else if (plantC.sensor === 0) {
        watering(plantC.name, plantC.pump, plantC.sensor);

        client.on('connect', function () {
            client.publish(plantC.name, '1')
            client.end()
            })
            
    } else if (plantD.sensor === 0) {
        watering(plantD.name, plantD.pump, plantD.sensor);

        client.on('connect', function () {
            client.publish(plantD.name, '1')
            client.end()
            })    
        
    } else if (plantE.sensor === 0) {
        watering(plantE.name, plantE.pump, plantE.sensor);

        client.on('connect', function () {
            client.publish(plantE.name, '1')
            client.end()
            })     
            
    } else if (plantF.sensor === 0) {
        watering(plantF.name, plantF.pump, plantF.sensor);

        client.on('connect', function () {
            client.publish(plantF.name, '1')
            client.end()
            })            

    } else if (plantG.sensor === 0) {
        watering(plantG.name, plantG.pump, plantG.sensor);

        client.on('connect', function () {
            client.publish(plantG.name, '1')
            client.end()
            })    

    } else if (plantH.sensor === 0) {
        watering(plantH.name, plantH.pump, plantH.sensor);

        client.on('connect', function () {
            client.publish(plantH.name, '1')
            client.end()
            })                    

    } else {
        console.log("Plants properly watered"); 
        client.on('connect', function () {
            client.publish('plants', 'Everything ok')
            client.end()
            })     
    }

}

checkSensorSate();
