import speech_recognition as sr
r = sr.Recognizer()
with sr.AudioFile("data/forward.wav") as source:
    audio = r.record(source)

try:
    s = r.recognize_sphinx(audio)
    print("Text: "+s)
except Exception as e:
    print("Exception: "+str(e))