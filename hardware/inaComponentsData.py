import pyrebase
import random
from time import sleep
from ina219 import INA219, DeviceRangeError
from firebaseconfig import config


firebase = pyrebase.initialize_app(config)
db = firebase.database()
cost=0

SHUNT_OHMS = 0.1
MAX_EXPECTED_AMPS = 2.0
ina = INA219(SHUNT_OHMS, MAX_EXPECTED_AMPS)
ina.configure(ina.RANGE_16V)


while True:
    try:
        voltage = round(ina.voltage(),2)
        current = round(ina.current(),2)
        power = round(ina.power(),2)
        shunt_voltage = round(ina.shunt_voltage(),2)
        cost += math.ceil(power*0.001*0.075)


        #print('Bus Voltage: ',voltage,"V")
        #print('Bus Current:', current,"mA")
        #print('Power:', power,"mW")
        #print('Shunt Voltage:', shunt_voltage,"mV",'\n')

        # print('Bus Voltage: {0:0.2f}V'.format(ina.voltage()))
        # print('Bus Current: {0:0.2f}mA'.format(ina.current()))
        # print('Power: {0:0.2f}mW'.format(ina.power()))
        # print('Shunt Voltage: {0:0.2f}mV\n'.format(ina.shunt_voltage()))

        #costPerUnit = 5.35#1lakh units (more = 5.75)

        data = {
            'consumption':power,
            'estimatedConsumption':current,
            'cost':cost,
            'solar':random.randint(53,63),
            'efficiency':random.randint(53,63)
        }
        print(data,'\n')
        db.child("home_data").child("-L_ONNCKCabp_Z55QUXM").update(data)
        sleep(2)
    except DeviceRangeError as e:
        print(e)
