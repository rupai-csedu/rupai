from os import environ, path

from pocketsphinx.pocketsphinx import *
from sphinxbase.sphinxbase import *

#import pyaudio


MODELDIR = "model"
DATADIR = "data"

# Create a decoder with certain model
config = Decoder.default_config()
config.set_string('-hmm', path.join(MODELDIR, 'en-us'))
config.set_string('-lm', path.join(MODELDIR, 'small.lm'))
config.set_string('-dict', path.join(MODELDIR, 'small.dic'))
config.set_string('-mllr', path.join(MODELDIR, 'mllr_matrix'))
config.set_string('-logfn', '/dev/null')

#decoder = Decoder(config)






# Decode streaming data.
decoder = Decoder(config)
#decoder.set_kws('keyphrase', path.join(MODELDIR, 'phrase'))
#decoder.set_search('keyphrase')
decoder.start_utt()
stream = open(path.join(DATADIR, 'left1.wav'), 'rb')

#p = pyaudio.PyAudio()
#stream = p.open(format=pyaudio.paInt16, channels=1, rate=16000, input=True, frames_per_buffer=1024)
#stream.start_stream()

for i in range(100):
  buf = stream.read(1024)
  if buf:
    decoder.process_raw(buf, False, False)
  else:
    break
decoder.end_utt()

hypothesis = decoder.hyp()
logmath = decoder.get_logmath()
print ('Best hypothesis: ', hypothesis.hypstr)

#if hypothesis.hypstr=='LEFT':
#  print("LEFT found")

#print ('Best hypothesis segments: ', [seg.word for seg in decoder.seg()])
