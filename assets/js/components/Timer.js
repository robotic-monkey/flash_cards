import React, {useContext} from 'react'
import {FlashCardContext} from '../contexts/FlashCardContext';

export const Timer = () => {

  const context = useContext(FlashCardContext);

  return (
    <div>
      <Form.Group>
        <span>Timer on:{'  '}
          <input
            type="checkbox"
            onChange={() => {
            context.setTimer();
          }}/></span>
        <Form.Check
          type="radio"
          label="first radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          defaultChecked/>
        <Form.Check
          type="radio"
          label="second radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"/>

      </Form.Group>
    </div>
  )
}

export default Timer;