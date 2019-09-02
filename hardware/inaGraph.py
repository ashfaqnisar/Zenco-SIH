import pyrebase
from ina219 import INA219, DeviceRangeError
from firebaseconfig import config
from datetime import datetime
from time import sleep

firebase = pyrebase.initialize_app(config)

db = firebase.database()

SHUNT_OHMS = 0.1
MAX_EXPECTED_AMPS = 2.0
ina = INA219(SHUNT_OHMS, MAX_EXPECTED_AMPS)
ina.configure(ina.RANGE_16V)


data=[]
data.append({"name":0,"Energy":0})
data.append({"name":0,"Energy":0})
data.append({"name":0,"Energy":0})
data.append({"name":0,"Energy":0})
data.append({"name":0,"Energy":0})
data.append({"name":0,"Energy":0})
data.append({"name":0,"Energy":0})
data.append({"name":0,"Energy":0})
data.append({"name":0,"Energy":0})
data.append({"name":0,"Energy":0})
while True:
    power = round(ina.power(),2)
    now = datetime.now()

    data.pop(0)
    data.append({"name":now.strftime("%H:%M:%S"),"Energy":power})

    print(data)
    db.child("graph_data").set(data)

    sleep(2)
