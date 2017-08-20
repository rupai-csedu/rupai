import Adafruit_GPIO.SPI as SPI
import Adafruit_SSD1306
import time

from PIL import Image
from PIL import ImageDraw
from PIL import ImageFont


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
print str(width) + " " + str(height)
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
    # Draw a black filled box to clear the image.
    draw.line((x0, y0, x1, y1), fill=255)
    disp.image(image)
    disp.display()


def rectangle(x0, y0, x1, y1):
    draw.rectangle((x0, y0, x1, y1), outline=255, fill=0)
    disp.image(image)
    disp.display()


def ellipse(x0, y0, x1, y1):
    draw.ellipse((x0, y0, x1, y1), outline=255, fill=0)
    disp.image(image)
    disp.display()


def point(x0, y0):
    draw.ellipse((x0, y0), fill=0)
    disp.image(image)
    disp.display()




