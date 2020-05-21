import React, {useState, useContext} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import ListGroup from 'react-bootstrap/ListGroup';
import {FlashCardContext} from '../contexts/FlashCardContext';
import Slider from './CardSlider'

const StyledModal = styled(Modal)`
    .modal-90w {
        min-width: 90%;
        margin-bottom: 60px;
    }
  `;
const StyledCategories = styled.div `
    margin-top: 20px;
    margin-left: 0px;
    margin-bottom: 20px;
`;
const StyledRadio = styled.input`
    margin-right: 21px;
`;
const StyledButton = styled(Button)`
        margin-right: 20px;
        margin-bottom: 20px;
  `;
export const SelectionModal = () => {

  const [show, setShow] = useState(false);
  const context = useContext(FlashCardContext);
  let listCounter = 0;

  return (
    <div>

      <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button>
      <StyledModal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Card Selection
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
          <StyledCategories>
            <h3>JLPT Level:</h3>
            <span>N5:{'  '}
              <StyledRadio
                type="checkbox"
                defaultChecked={context
                .filters
                .category
                .find(element => element == 'N5')}
                onChange={() => {
                context.setFilter('N5')
              }}/>{'  '}</span>
            <span>N4:{'  '}
              <StyledRadio
                type="checkbox"
                defaultChecked={context
                .filters
                .category
                .find(element => element == 'N4')}
                onChange={() => {
                context.setFilter('N4')
              }}/></span>
              <span>N3:{'  '}
              <StyledRadio
              disabled
                type="checkbox"
                defaultChecked={context
                .filters
                .category
                .find(element => element == 'N3')}
                onChange={() => {
                context.setFilter('N3')
              }}/></span>
              <span>N2:{'  '}
              <StyledRadio
              disabled
                type="checkbox"
                defaultChecked={context
                .filters
                .category
                .find(element => element == 'N2')}
                onChange={() => {
                context.setFilter('N2')
              }}/></span>
              <span>N1:{'  '}
              <StyledRadio
                disabled 
                type="checkbox"
                defaultChecked={context
                .filters
                .category
                .find(element => element == 'N1')}
                onChange={() => {
                context.setFilter('N1')
              }}/></span>
              
          </StyledCategories>
          <StyledButton onClick={() => {
            context.randomizeCards();
          }}>Randomize Order</StyledButton>
          <StyledButton onClick={() => {
            context.resetCardOrder();
          }}>Reset Order</StyledButton>


          <h3>Selection Range Slider:</h3>
          <Slider  />
          <ListGroup>
          
            {context
              .selectedCards
              .map((card) => {
              
              listCounter++
                return <ListGroup.Item key={listCounter + card.side_a}><span key={listCounter + card.side_c}>{listCounter + '. '}</span>{card.side_a + "; " + card.side_c}</ListGroup.Item>
              })}</ListGroup>

        </Modal.Body>

      </StyledModal>
    </div>
  )
}

export default SelectionModal;