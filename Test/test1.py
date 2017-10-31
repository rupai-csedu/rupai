from os import environ, path

from pocketsphinx.pocketsphinx import *
from sphinxbase.sphinxbase import *


MODELDIR = "model"
DATADIR = "data"

# Create a decoder with certain model
config = Decoder.default_config()
config.set_string('-hmm', path.join(MODELDIR, 'en-us'))
config.set_string('-lm', path.join(MODELDIR, '5395.lm'))
config.set_string('-dict', path.join(MODELDIR, '5395.dic'))
config.set_string('-logfn', '/dev/null')
decoder = Decoder(config)

# Decode streaming data.
decoder = Decoder(config)
decoder.start_utt()
stream = open(path.join(DATADIR, 'left.wav'), 'rb')
while True:
  buf = stream.read(1024)
  if buf:
    decoder.process_raw(buf, False, False)
  else:
    break
decoder.end_utt()

hypothesis = decoder.hyp()
logmath = decoder.get_logmath()
print ('Best hypothesis: ', hypothesis.hypstr)

print ('Best hypothesis segments: ', [seg.word for seg in decoder.seg()])
