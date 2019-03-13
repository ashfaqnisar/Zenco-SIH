import pyrebase
import random
import time


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

val = 1
while val==1:
    voltage = random.randint(45,55)
    current = random.randint(53,63)
    costPerUnit = 5.35#1lakh units (more = 5.75)


    data = {
        'consumption':voltage,
        'estimatedConsumption':current
    }
    print(data)
    db.child("home_data").child("-L_ONNCKCabp_Z55QUXM").set(data)
    time.sleep(5)
