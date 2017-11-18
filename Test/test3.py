from os import environ, path

from pocketsphinx.pocketsphinx import *
from sphinxbase.sphinxbase import *


MODELDIR = "model"
DATADIR = "data"

# Create a decoder with certain model
config = Decoder.default_config()
config.set_string('-hmm', path.join(MODELDIR, 'en-us'))
config.set_string('-dict', path.join(MODELDIR, '5395.dic'))
#config.set_string('-kws', path.join(MODELDIR, 'phrase'))
config.set_string('-logfn', '/dev/null')
config.set_string('-keyphrase', 'go')
config.set_float('-kws_threshold', 1e-1)



# Decode streaming data.
decoder = Decoder(config)
#decoder.set_kws('keyphrase', path.join(MODELDIR, 'phrase'))
#decoder.set_search('keyphrase')
decoder.start_utt()
stream = open(path.join(DATADIR, 'forward.wav'), 'rb')

while True:
    buf = stream.read(1024)
    if buf:
         decoder.process_raw(buf, False, False)
    else:
         break
    if decoder.hyp() != None:
        print ([(seg.word, seg.prob, seg.start_frame, seg.end_frame) for seg in decoder.seg()])
        print ("Detected keyphrase, restarting search")
        decoder.end_utt()
        decoder.start_utt()
