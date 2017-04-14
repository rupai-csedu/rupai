
#!/usr/bin/python
from nanpy import (ArduinoApi, SerialManager)
from time import sleep
from time import time
from measure import Measure

#trigpin=4
#echopin=3

trigpin=2
echopin=3


try:
    connection = SerialManager()
    a= ArduinoApi(connection = connection)
    a.pinMode(trigpin, a.OUTPUT)
    a.pinMode(echopin, a.INPUT)
    m = Measure(connection=connection)
    
    print("Connected to Arduino")
except:
    print("Failed to connect")

while True:

    
    distance = m.getMeasure(trigpin, echopin)
    if distance>0 :
        print(distance)
    sleep(.25)

