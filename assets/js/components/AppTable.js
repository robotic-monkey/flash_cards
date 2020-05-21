import React, {useContext} from 'react';
import {FlashCardContext} from '../contexts/FlashCardContext';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDealer from './CardDealer';
import Options from './Options';
import TTS from './TTS';
import SelectionModal from './SelectionModal'


  const StyledRow = styled(Row)`
    background-color: lightblue;
    
  `;
  const StyledCol = styled(Col)`
    outline: 2px solid red;
  `;
  const StyledAppHolder = styled.div `
    margin: 50px;
  `;
  const StyledHero = styled(Col)`
    color: blue;
    outline: 2px solid red;
    font-size: 34px;
  `;

export const AppTable = () => {

  

  const context = useContext(FlashCardContext);

  return (
    <StyledAppHolder>
      <Container fluid>
        <StyledRow>
          <StyledCol>1 of 3</StyledCol>
          <StyledHero xs={8}>{<CardDealer />}</StyledHero>
          <StyledCol>3 of 3</StyledCol>
        </StyledRow>
        <StyledRow>
          <StyledCol><SelectionModal /></StyledCol>
          <StyledCol xs={5}><Options/></StyledCol>
          <StyledCol><TTS /></StyledCol>
        </StyledRow>
      </Container>
    </StyledAppHolder>
  )
}

export default AppTable;