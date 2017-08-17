import _thread


TAG1 = 'main> '
TAG2 = 'event> '

def mainLoop():
    while True:
        print(TAG1+'main')

def eventLoop():
    i = 0
    while True:
        i+=1
        if i % 2 == 0:
            print(TAG2+'even')


# Create two threads as follows
try:
    _thread.start_new_thread(mainLoop, ())
    _thread.start_new_thread(eventLoop, ())
except:
    print("Error: unable to start thread")

while 1:
   pass