from nanpy.arduinoboard import ArduinoObject
from nanpy.arduinoboard import (arduinoobjectmethod, returns)

class Measure(ArduinoObject):

    def __init__(self, connection=None):
        ArduinoObject.__init__(self, connection=connection)
        self.id = self.call('new', None)

    @returns(int)
    @arduinoobjectmethod
    def getMeasure(self, trigger, echo):
        pass
