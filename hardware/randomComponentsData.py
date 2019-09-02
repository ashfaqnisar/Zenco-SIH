import pyrebase
import random
import math
from time import sleep
from firebaseconfig import config

firebase = pyrebase.initialize_app(config)

db = firebase.database()
cost = 0

while True:
    voltage = random.randint(45,55)
    current = random.randint(53,63)
    power = (voltage*current)/1000
    cost += math.ceil(power*0.001*0.075)

    data = {
        'consumption':power,
        'estimatedConsumption':current,
        'cost':cost,
        'solar':random.randint(53,63),
        'efficiency':random.randint(53,63)
    }
    print(data)
    db.child("home_data").child("-L_ONNCKCabp_Z55QUXM").update(data)
    sleep(5)
