import React, {useEffect, useContext} from 'react';
import Speech from 'speak-tts'
import Button from 'react-bootstrap/Button';
import {FlashCardContext} from '../contexts/FlashCardContext';

export const TTS = () => {

  const speech = new Speech();
  const context = useContext(FlashCardContext);
  
  const initSound = () => {
    if(context.sound.on == true){
      speech.init({
        'volume': 1,
        'lang': 'ja-JP',
        'rate': 1,
        'pitch': 1,
        'voice': 'Microsoft Haruka Desktop - Japanese',
        'splitSentences': false,
        'listeners': {
          'onvoiceschanged': (voices) => {
            //console.log("Event voiceschanged", voices)
          }
        }
      }).then(data => {
        //console.log("Speech is ready", data);
        speak()
        //_addVoicesList(data.voices); _prepareSpeakButton(speech);
      }).catch(e => {
        //console.error("An error occured while initializing : ", e);
      });
      const text = speech.hasBrowserSupport()
        ? "Hurray, your browser supports speech synthesis"
        : "Your browser does NOT support speech synthesis. Try using Chrome or Safari inste" +
          "ad !";

    }

  const speak = () => {
    speech.speak({
      text: context.selectedCards[context.currentIndex.index].side_c,
      queue: false,
      listeners: {
        onstart: () => {
         // console.log("Start utterance");
        },
        onend: () => {
         // console.log("End utterance");
        },
        onresume: () => {
         // console.log("Resume utterance");
        },
        onboundary: event => {
        //  console.log(event.name + " boundary reached after " + event.elapsedTime + " milliseconds.");
        }
      }
    }).then(data => {
      //console.log("Success !", data);
    }).catch(e => {
      console.error("An error occurred :", e);
    });
  }
  }
  useEffect(() => {
    initSound()
  }, [context.currentIndex.index]); 

  return (
    <div>
      <Button onClick={() => {
        initSound()
      }}>treats</Button>
    </div>
  );
}

export default TTS;