import pyrebase
import random
from time import sleep
from ina219 import INA219, DeviceRangeError


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
ina = INA219(SHUNT_OHMS, MAX_EXPECTED_AMPS)
ina.configure(ina.RANGE_16V)

while 1:
    try:
        voltage = ina.voltage()
        current = ina.current()
        power = ina.power()
        shunt_voltage = ina.shunt_voltage()

        print('Bus Voltage: ',voltage,"V")
        print('Bus Current:', current,"mA")
        print('Power:', power,"mW")
        print('Shunt Voltage:', shunt_voltage,"mV",'\n')

        #costPerUnit = 5.35#1lakh units (more = 5.75)

        data = {
            'consumption':voltage,
            'estimatedConsumption':current
        }
        #db.child("home_data").child("-L_ONNCKCabp_Z55QUXM").set(data)
        sleep(2)
    except DeviceRangeError as e:
            print(e)
