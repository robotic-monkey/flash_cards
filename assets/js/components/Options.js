import React, {useContext} from 'react';
import {FlashCardContext} from '../contexts/FlashCardContext';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import styled from 'styled-components';
import Timer from './Timer';
const StyledDiv = styled.div `
    
    
  `;

export const Options = () => {

  const context = useContext(FlashCardContext);

  const optionsController = (option, side, onoroff) => {
    context.setView(option, side, onoroff)
  }

  return (
    <div>
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Front Options
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <div>
              <div>
                <span>English:{'  '}
                  <input
                    type="checkbox"
                    defaultChecked={context.viewSideA.front}
                    onChange={() => {
                    optionsController("A", 'front', !context.viewSideA.front)
                  }}/></span>
              </div>
              <div>
                <span>Romaji:{'  '}
                  <input
                    type="checkbox"
                    defaultChecked={context.viewSideB.front}
                    onChange={() => {
                    optionsController("B", 'front', !context.viewSideB.front)
                  }}/></span>
              </div>
              <div>
                <span>Kana:{'  '}
                  <input
                    type="checkbox"
                    defaultChecked={context.viewSideC.front}
                    onChange={() => {
                    optionsController("C", 'front', !context.viewSideC.front)
                  }}/></span>
              </div>
              <div>
                <span>Kanji:{'  '}
                  <input
                    type="checkbox"
                    defaultChecked={context.viewSideD.front}
                    onChange={() => {
                    optionsController("D", 'front', !context.viewSideD.front)
                  }}/></span>
              </div>

            </div>

          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Back Options
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <div>
              <div>
                <span>English:{'  '}
                  <input
                    type="checkbox"
                    defaultChecked={context.viewSideA.back}
                    onChange={() => {
                    optionsController("A", 'back', !context.viewSideA.back)
                  }}/></span>
              </div>
              <div>
                <span>Romaji:{'  '}
                  <input
                    type="checkbox"
                    defaultChecked={context.viewSideB.back}
                    onChange={() => {
                    optionsController("B", 'back', !context.viewSideB.back)
                  }}/></span>
              </div>
              <div>
                <span>Kana:{'  '}
                  <input
                    type="checkbox"
                    defaultChecked={context.viewSideC.back}
                    onChange={() => {
                    optionsController("C", 'back', !context.viewSideC.back)
                  }}/></span>
              </div>
              <div>
                <span>Kanji:{'  '}
                  <input
                    type="checkbox"
                    defaultChecked={context.viewSideD.back}
                    onChange={() => {
                    optionsController("D", 'back', !context.viewSideD.back)
                  }}/></span>
              </div>
            </div>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Sound Options
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <div>
              <div>
                <span>Sound on:{'  '}
                  <input
                    type="checkbox"
                    defaultChecked={context.viewSideA.back}
                    onChange={() => {
                    context.setSound();
                  }}/></span>
              </div>
            </div>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Timer Options
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Timer />
          </Accordion.Collapse>
        </Card>

      </Accordion>
    </div>
  )
}

export default Options