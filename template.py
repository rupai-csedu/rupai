#!/usr/bin/python
from nanpy import (ArduinoApi, SerialManager)
from time import sleep
from time import time
from measure import Measure
import thread

import Adafruit_GPIO.SPI as SPI
import Adafruit_SSD1306

from PIL import Image
from PIL import ImageDraw
from PIL import ImageFont



#This block is for arduino codes

speed_right= 10 
speed_left= 11          
rot_right_1= 8  
rot_right_2= 9  
rot_left_1= 12  
rot_left_2= 2

trigpin=13
echopin=3

SS2_LEFT_IN=7
SS3_CENTER=4
CLP_BUMP=5
SS4_RIGHT_IN=6

speed_left_value=236
speed_right_value=173
rot_left_value=150
rot_right_value=255

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
    while distance<0:
        distance = m.getMeasure(trigpin, echopin)
    if distance>0 and distance<10:
        print(distance)
        print("Obstacle Detected")
        return True
    elif distance>=10:
        print(distance)
        print("No Obstacle")
        return False

def leftIsWhite():
    LeftIn =  a.digitalRead(SS2_LEFT_IN)
    if (LeftIn   == 1):
        print("yaah! left is white")
        return True
    else:
        return False

def rightIsWhite():
    RightIn  = a.digitalRead(SS4_RIGHT_IN)
    if (RightIn == 1):
        return True
    else:
        return False

def centreIsWhite():
    Center   = a.digitalRead(SS3_CENTER)
    if (Center == 1):
        return True
    else:
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
        print("On Track")
        return True
    else:
        print("Out of Track")
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


def testMotor(sl,sr,rl,rr):
    a.analogWrite(speed_left,sl)
    a.analogWrite(speed_right,sr)
				
    a.analogWrite(rot_left_1,0)
    a.analogWrite(rot_left_2,rl)

    a.analogWrite(rot_right_1,0)
    a.analogWrite(rot_right_2,rr)
    
			
    sleep(4)

		
def turn(str):
    tl='turn_left'
    tr='turn_right'
    if(str==tl):
        turn_left()
    elif(str==tr):
        turn_right()
		
def move_back(time):
    print('moving backward')
    a.analogWrite(speed_left,speed_left_value)
    a.analogWrite(speed_right,speed_right_value)
				
    a.analogWrite(rot_left_1,rot_left_value)
    a.analogWrite(rot_left_2,0)

    a.analogWrite(rot_right_1,rot_right_value)
    a.analogWrite(rot_right_2,0)
			
    sleep(0.2*time)



def move_forward(time):
    print('moving forward')
    a.analogWrite(speed_left,speed_left_value)
    a.analogWrite(speed_right,speed_right_value)
				
    a.analogWrite(rot_left_1,0)
    a.analogWrite(rot_left_2,rot_left_value)

    a.analogWrite(rot_right_1,0)
    a.analogWrite(rot_right_2,rot_right_value)

    sleep(0.2*time)


def turn_right():
    a.analogWrite(speed_left,speed_left_value)
    a.analogWrite(speed_right,speed_right_value)
				
    a.analogWrite(rot_left_1,0)
    a.analogWrite(rot_left_2,255)

    a.analogWrite(rot_right_1,255)
    a.analogWrite(rot_right_2,0)
			
    sleep(0.45)

def turn_left():

    a.analogWrite(speed_left,speed_left_value)
    a.analogWrite(speed_right,speed_right_value)
				
    a.analogWrite(rot_left_1,255)
    a.analogWrite(rot_left_2,0)

    a.analogWrite(rot_right_1,0)
    a.analogWrite(rot_right_2,255)
	
    sleep(0.4)

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



#This block is for showing display


# Raspberry Pi pin configuration:
RST = 24
# Note the following are only used with SPI:
DC = 23
SPI_PORT = 0
SPI_DEVICE = 0

# 128x64 display with hardware SPI:
disp = Adafruit_SSD1306.SSD1306_128_64(rst=RST, dc=DC, spi=SPI.SpiDev(SPI_PORT, SPI_DEVICE, max_speed_hz=8000000))

# Initialize library.
disp.begin()

# Clear display.
disp.clear()
disp.display()

# Create blank image for drawing.
# Make sure to create image with mode '1' for 1-bit color.
width = disp.width
height = disp.height
print (str(width) + " " + str(height))
image = Image.new('1', (width, height))

# Get drawing object to draw on image.
draw = ImageDraw.Draw(image)

# Draw a black filled box to clear the image.
draw.rectangle((0, 0, width, height), outline=0, fill=0)

# Draw some shapes.
padding = 2

top = padding
bottom = height-padding
# Move left to right keeping track of the current x position for drawing shapes.
x = padding

# Load font.
# font = ImageFont.truetype('pixeled.ttf', 12)
font = ImageFont.load_default()


def text(text_to_display, row, col):
    draw.text((col, row), text_to_display, font=font, fill=255)
    disp.image(image)
    disp.display()

def clear_display():
    # Draw a black filled box to clear the image.
    draw.rectangle((0, 0, width, height), outline=0, fill=0)
    disp.image(image)
    disp.display()


#This block is for event_management

events= []


def check_light_left_white():
    print("checking left white")
    return leftIsWhite()

def light_left_white():
    print("dummy function called")


def event_check_loop():
    while True:
        for event in events:
            sleep(0.1)
            if event=='light_left_white' and check_light_left_white():
                light_left_white()

def add_event(type):
    events.append(type)


try:
    thread.start_new_thread(event_check_loop, ())
except:
    print("Error: unable to start thread")

