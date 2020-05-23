import React, {useContext, useState} from 'react'
import {FlashCardContext} from '../contexts/FlashCardContext';
import Form from 'react-bootstrap/Form'


let timerOn = false;
  let intervalID;
  let timerLength = 5000;

export const Timer = () => {
  const context = useContext(FlashCardContext);

  const timeController = () => {
     stopTimer();
    if(timerOn){
      startTimer(); 
    }
  }

  const timeExpired = () => {
    context.nextCard();
    timeController();
  }

 const stopTimer = () => {
    clearTimeout(intervalID);
  }

 const startTimer = () => {
    intervalID = setTimeout(timeExpired.bind(this), timerLength)
  }

  return (
    <div>
      <Form.Group>
        <span>Timer on:{'  '}
          <input
            type="checkbox"
            defaultChecked={timerOn}
            onChange={() => {
          console.log("before_timerOn: " + timerOn)   
          timerOn = !timerOn;
          console.log("after_timerOn: " + timerOn)
           if(timerOn){
            startTimer();
          }else{
            clearTimeout(intervalID);}
          }}/></span>
        <Form.Check
          type="radio"
          label="5 seconds"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          defaultChecked
          onChange={() => {
            if(timerOn){
              timerLength=5000
              clearTimeout(intervalID);
              startTimer();
            }
            else{
              timerLength=5000
            }
        }}/>
        <Form.Check
          type="radio"
          label="10 seconds"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
          onChange={() => {
            if(timerOn){
              timerLength=10000
              clearTimeout(intervalID);
              startTimer();
            }
            else{
              timerLength=10000
            }
        }}/>

      </Form.Group>
    </div>
  )
}

export default Timer;