#!/usr/bin/python
from nanpy import (ArduinoApi, SerialManager)
from time import sleep

#Five-Way Sensor

#SS1_LEFT_OUT=2
SS2_LEFT_IN=7
SS3_CENTER=4
CLP_BUMP=5
SS4_RIGHT_IN=6
#SS5_RIGHT_OUT=7


try:
	connection = SerialManager()
	a= ArduinoApi(connection = connection)
	a.pinMode(5,a.INPUT)
	print("Connected to Arduino")
except:
	print("Failed to connect")


def getSensorData():
    #LeftOut  = a.digitalRead(SS1_LEFT_OUT)
    LeftIn   = a.digitalRead(SS2_LEFT_IN)
    Center   = a.digitalRead(SS3_CENTER)
    RightIn  = a.digitalRead(SS4_RIGHT_IN)
    #RightOut = a.digitalRead(SS5_RIGHT_OUT)
    Bump     = a.digitalRead(CLP_BUMP)
    Near     = a.analogRead(5)     

    
    if (LeftIn   == 1):
        print("l ")
    else:
        print("- ")
    if (Center == 1):
        print("C ")
    else:
        print("- ")
    if (RightIn == 1):
        print("r ")
    else:
        print("- ")
    if (Bump  == 1):
        print("BUMP! ")
    else:
        print(" ")
    if (Near  >100):
        print("NEAR! ")
    else:
        print(Near)
print("Test Start")
#a.NEAR=A5;
while True:
    getSensorData()
    sleep(1)

