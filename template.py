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

from os import environ, path

from pocketsphinx.pocketsphinx import *
from sphinxbase.sphinxbase import *

import pyaudio




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


#voice detection

MODELDIR = "model"
DATADIR = "data"

# Create a decoder with certain model
config = Decoder.default_config()
config.set_string('-hmm', path.join(MODELDIR, 'en-us'))
config.set_string('-lm', path.join(MODELDIR, 'small.lm'))
config.set_string('-dict', path.join(MODELDIR, 'small.dic'))
config.set_string('-logfn', '/dev/null')



def detect_voice():

    # Decode streaming data.
    decoder = Decoder(config)
    decoder.start_utt()

    p = pyaudio.PyAudio()
    stream = p.open(format=pyaudio.paInt16, channels=1, rate=16000, input=True, frames_per_buffer=1024)

    for i in range(0, int(16000 / 1024 * 1)):
        buf = stream.read(1024)
        if buf:
            decoder.process_raw(buf, False, False)
        else:
            break
    decoder.end_utt()

    hypothesis = decoder.hyp()
    logmath = decoder.get_logmath()
    print('Best hypothesis: ', hypothesis.hypstr)

    return hypothesis.hypstr




def wait(time):
    sleep(time/1000)

def obstacleDetected():
    sleep(.1)
    distance = m.getMeasure(trigpin, echopin)
    while distance<0:
        distance = m.getMeasure(trigpin, echopin)

    print(distance)

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
    print('moving forward work done')
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
    draw.text((col, row*10), text_to_display, font=font, fill=255)
    disp.image(image)
    disp.display()


def clear():
    # Draw a black filled box to clear the image.
    draw.rectangle((0, 0, width, height), outline=0, fill=0)
    disp.image(image)
    disp.display()


def line(x0, y0, x1, y1):
    draw.line((x0, y0, x1, y1), fill=255)
    disp.image(image)
    disp.display()


def rectangle(x0, y0, x1, y1, fill):
    print('drawing rectangle')
    if fill:
        fill = 255
    else:
        fill = 0

    draw.rectangle((x0, y0, x1, y1), outline=255, fill=fill)
    disp.image(image)
    disp.display()


def ellipse(x0, y0, x1, y1, fill):
    print('drawing ellipse')
    if fill:
        fill = 255
    else:
        fill = 0
    draw.ellipse((x0, y0, x1, y1), outline=255, fill=fill)
    disp.image(image)
    disp.display()


def point(x0, y0):
    draw.point((x0, y0), fill=255)
    disp.image(image)
    disp.display()


#This block is for event_management

events = []


def check_light_left_white():
    print("checking left white")
    return leftIsWhite()

def light_left_white():
    print("dummy function called")


def check_light_right_white():
    return leftIsWhite()

def light_right_white():
    print("dummy function called")


def check_light_centre_white():
    return leftIsWhite()

def light_centre_white():
    print("dummy function called")


def check_light_left_black():
    #print("checking left white")
    return not leftIsWhite()

def light_left_black():
    print("dummy function called")


def check_light_right_black():
    return not leftIsWhite()

def light_right_black():
    print("dummy function called")


def check_light_centre_black():
    return not leftIsWhite()

def light_centre_black():
    print("dummy function called")

def check_voice_go():
    return detect_voice() == "GO"

def voice_go():
    print("dummy function called")

def check_voice_left():
    return detect_voice() == "LEFT"

def voice_left():
    print("dummy function called")

def check_voice_right():
    return detect_voice() == "RIGHT"

def voice_right():
    print("dummy function called")

def check_voice_stop():
    return detect_voice() == "STOP"

def voice_stop():
    print("dummy function called")



def event_check_loop():
    while True:
        #print('checking event')
        sleep(.1)
        for event in events:
            #print('checking event in list')
            #sleep(0.1)
            if event == 'light_left_white' and check_light_left_white():
                light_left_white()
            elif event == 'light_right_white' and check_light_right_white():
                light_right_white()
            elif event == 'light_centre_white' and check_light_centre_white():
                light_centre_white()
            elif event == 'light_left_black' and check_light_left_black():
                light_left_black()
            elif event == 'light_right_black' and check_light_right_black():
                light_right_black()
            elif event == 'light_centre_black' and check_light_centre_black():
                light_centre_black()
            elif event == 'voice_go' and check_voice_go():
                print("voice go dectected")
                voice_go()
            elif event == 'voice_left' and check_voice_left():
                print("voice left dectected")
                voice_left()
            elif event == 'voice_right' and check_voice_right():
                print("voice right dectected")
                voice_right()
            elif event == 'voice_stop' and check_voice_stop():
                print("voice stop dectected")
                voice_stop()

def add_event(type):
    events.append(type)


try:
    x = thread.start_new_thread(event_check_loop, ())
except:
    print("Error: unable to start thread")


