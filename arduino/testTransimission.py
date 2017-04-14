#!/usr/bin/python
from nanpy import (ArduinoApi, SerialManager)
from time import sleep
from time import time
from measure import Measure

speed_left= 10 
speed_right= 11          
rot_left_1= 8  
rot_left_2= 9  
rot_right_1= 12  
rot_right_2= 13

trigpin=2
echopin=3

SS2_LEFT_IN=7
SS3_CENTER=4
CLP_BUMP=5
SS4_RIGHT_IN=6


try:
    connection = SerialManager()
    a= ArduinoApi(connection = connection)
    a.pinMode(trigpin, a.OUTPUT)
    a.pinMode(echopin, a.INPUT)
    a.pinMode(5,a.INPUT)
    m = Measure(connection=connection)
    print("Connected to Arduino")
except:
    print("Failed to connect")

  
a.pinMode(speed_left,a.OUTPUT)
a.pinMode(speed_right,a.OUTPUT)
    
a.pinMode(rot_left_1,a.OUTPUT)
a.pinMode(rot_left_2,a.OUTPUT)
    
a.pinMode(rot_right_1,a.OUTPUT)
a.pinMode(rot_right_2,a.OUTPUT)


# obstacleDetected()
# wait(time_in_milisec)
# getColorFromSensor()
# getDistanceFromSensor()
# say("text")


def wait(time):
    sleep(time/1000)

def obstacleDetected():
    distance = m.getMeasure(trigpin, echopin)
    if distance>0 and distance<10:
        return True
    elif distance>=10:
        return False
            

def onTrack():
    LeftIn   = a.digitalRead(SS2_LEFT_IN)
    Center   = a.digitalRead(SS3_CENTER)
    RightIn  = a.digitalRead(SS4_RIGHT_IN)
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
    
    if (LeftIn==0 and Center==0 and RightIn==0):
        return True
    else:
        return False

def getDistanceFromSensor():
    distance = m.getMeasure(trigpin, echopin)
    if distance>0 :
        print(distance)
    else:
        distance=m.getMeasure(trigpin, echopin)
    return distance

def say(str):
	print(str)
	
def go(str,time):
    a='forward'
    b='backward'

    if(str==a):
        move_forward(time)
    elif(str==b):
        move_back(time)
		
def turn(str):
    tl='turn_left'
    tr='turn_right'
    if(str==tl):
        turn_left()
    elif(str==tr):
        turn_right()
		
def move_forward(time):
    a.analogWrite(speed_left,255)
    a.analogWrite(speed_right,255)
				
    a.analogWrite(rot_left_1,0)
    a.analogWrite(rot_left_2,255)

    a.analogWrite(rot_right_1,0)
    a.analogWrite(rot_right_2,255)
			
    sleep(time)



def move_back(time):
    a.analogWrite(speed_left,255)
    a.analogWrite(speed_right,255)
				
    a.analogWrite(rot_left_1,255)
    a.analogWrite(rot_left_2,0)

    a.analogWrite(rot_right_1,255)
    a.analogWrite(rot_right_2,0)
			
    sleep(time)


def turn_right():
    a.analogWrite(speed_left,255)
    a.analogWrite(speed_right,255)
				
    a.analogWrite(rot_left_1,255)
    a.analogWrite(rot_left_2,0)

    a.analogWrite(rot_right_1,0)
    a.analogWrite(rot_right_2,255)
			
    sleep(0.5)

def turn_left():
    a.analogWrite(speed_left,255)
    a.analogWrite(speed_right,255)
				
    a.analogWrite(rot_left_1,0)
    a.analogWrite(rot_left_2,255)

    a.analogWrite(rot_right_1,255)
    a.analogWrite(rot_right_2,0)
			
    sleep(0.5)

def stop():
    a.analogWrite(speed_left,0)
    a.analogWrite(speed_right,0)
				
    a.analogWrite(rot_left_1,0)
    a.analogWrite(rot_left_2,0)

    a.analogWrite(rot_right_1,0)
    a.analogWrite(rot_right_2,0)
			
    sleep(1)
	
def run():
    print('hello world')




while True:
    print(obstacleDetected())
    print(onTrack())
    wait(200)
