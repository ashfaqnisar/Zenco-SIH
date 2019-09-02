import pyrebase
from random import randint
from firebaseconfig import config
from datetime import datetime
from time import sleep

firebase = pyrebase.initialize_app(config)

db = firebase.database()


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
data.append({"name":0,"Energy":randint(45,65)})
while True:
    now = datetime.now()
    oldData=data.pop(0)
    data.append({"name":now.strftime("%H:%M:%S"),"Energy":randint(43,56)})
    print(data)
    db.child("graph_data").set(data)
    sleep(2)
