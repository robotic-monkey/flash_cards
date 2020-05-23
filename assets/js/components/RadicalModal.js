import React, {useState, useContext} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import ListGroup from 'react-bootstrap/ListGroup';
import {FlashCardContext} from '../contexts/FlashCardContext';

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

export const RadicalModal = () => {

  const [show,
    setShow] = useState(false);
  const context = useContext(FlashCardContext);

  return (
    <div>
      <Button variant="primary" onClick={() => setShow(true)}>
        View Radicals
      </Button>
      <StyledModal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            List of Common Radicals
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <StyledCategories>
          <p>{context.viewSideD.front}</p>
          <ListGroup>
          <div>{context.selectedCards.length !== 0 ? ((context.selectedCards[context.currentIndex.index].side_d == null) ? context.selectedCards[context.currentIndex.index].side_c: context.selectedCards[context.currentIndex.index].side_d ):null}</div>
          {context
            .radicals
            .map((rad) => {
              return <ListGroup.Item key={rad.kanji_rad}><span>{rad.kanji_rad}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>{rad.meaning}</span></ListGroup.Item>
            })}</ListGroup>
          </StyledCategories>
        </Modal.Body>
      </StyledModal>
    </div>

  )
}

export default RadicalModal