import math
import time
import os

import Adafruit_GPIO.SPI as SPI
import Adafruit_SSD1306

from PIL import Image
from PIL import ImageFont
from PIL import ImageDraw


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

# Get display width and height.
width = disp.width
height = disp.height

# Clear display.
disp.clear()
disp.display()

def blink():
    ims = []
    ims.append(Image.open("blink/1.png").convert('1'))
    ims.append(Image.open("blink/2.png").convert('1'))
    ims.append(Image.open("blink/3.png").convert('1'))
    ims.append(Image.open("blink/4.png").convert('1'))
    ims.append(Image.open("blink/5.png").convert('1'))

    while True:
        time.sleep(2.0)
        nframes = 0
        for count in xrange(5):
            disp.image(ims[count])
            disp.display()
            # print nframes
            nframes += 1
            time.sleep(0.05)

blink()
