import random
import time

var = 1
while var==1:
    data = random.randint(23,33)

    json_data = {
        "voltage":data
    }
    print(json_data)
    time.sleep(5)
