import pyrebase
import random
from time import sleep
#from ina219 import INA219, DeviceRangeError


config = {
    'apiKey': "AIzaSyC6MhugRQOBC4hXuYtfvA6_zZ22XGBDI30",
    'authDomain': "zenco-project.firebaseapp.com",
    'databaseURL': "https://zenco-project.firebaseio.com",
    'projectId': "zenco-project",
    'storageBucket': "zenco-project.appspot.com",
    'messagingSenderId': "512650874407"
}

firebase = pyrebase.initialize_app(config)

db = firebase.database()


SHUNT_OHMS = 0.1
MAX_EXPECTED_AMPS = 2.0
#ina = INA219(SHUNT_OHMS, MAX_EXPECTED_AMPS)
#ina.configure(ina.RANGE_16V)

while 1:

    voltage = random.randint(45,55)
    current = random.randint(53,63)
    power = random.randint(1,9)
    shunt_voltage = random.randint(0.10, 3)

    print('Bus Voltage: ',voltage,"V")
    print('Bus Current:', current,"mA")
    print('Power:', power,"mW")
    print('Shunt Voltage:', shunt_voltage,"mV")



    costPerUnit = 5.35#1lakh units (more = 5.75)


    data = {
        'consumption':voltage,
        'estimatedConsumption':current
    }
    print(data)
    db.child("home_data").child("-L_ONNCKCabp_Z55QUXM").set(data)
    sleep(5)
