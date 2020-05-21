import React, {useContext} from 'react'
import {FlashCardContext} from '../contexts/FlashCardContext';

import styled from 'styled-components';

export const Cards = () => {

  const context = useContext(FlashCardContext);

  return (
    <div>
      <div>{context.selectedCards.length !== 0 ? ((context.currentSide.side == 'front' && context.viewSideA.front) ? context.selectedCards[context.currentIndex.index].side_a: null) : <p>No Cards Selected</p>}</div>
      <div>{context.selectedCards.length !== 0 ? ((context.currentSide.side == 'front' && context.viewSideB.front) ? context.selectedCards[context.currentIndex.index].side_b: null):null}</div>
      <div>{context.selectedCards.length !== 0 ? ((context.currentSide.side == 'front' && context.viewSideC.front) ? context.selectedCards[context.currentIndex.index].side_c: null):null}</div>
      <div>{context.selectedCards.length !== 0 ? ((context.currentSide.side == 'front' && context.viewSideD.front) ? context.selectedCards[context.currentIndex.index].side_d: null):null}</div>
      <div>{context.selectedCards.length !== 0 ? ((context.currentSide.side == 'front' && context.viewSideD.front && context.viewSideC.front == false && context.selectedCards[context.currentIndex.index].side_d == null) ? context.selectedCards[context.currentIndex.index].side_c: null):null}</div>
      <div>{context.selectedCards.length !== 0 ? ((context.currentSide.side == 'back' && context.viewSideA.back) ? context.selectedCards[context.currentIndex.index].side_a: null):null}</div>
      <div>{context.selectedCards.length !== 0 ? ((context.currentSide.side == 'back' && context.viewSideB.back) ? context.selectedCards[context.currentIndex.index].side_b: null):null}</div>
      <div>{context.selectedCards.length !== 0 ? ((context.currentSide.side == 'back' && context.viewSideC.back) ? context.selectedCards[context.currentIndex.index].side_c: null):null}</div>
      <div>{context.selectedCards.length !== 0 ? ((context.currentSide.side == 'back' && context.viewSideD.back) ? context.selectedCards[context.currentIndex.index].side_d: null):null}</div>
      <div>{context.selectedCards.length !== 0 ? ((context.currentSide.side == 'back' && context.viewSideD.back && context.viewSideC.back == false && context.selectedCards[context.currentIndex.index].side_d == null) ? context.selectedCards[context.currentIndex.index].side_c: null):null}</div>
      
    </div>
  )
}

export default Cards;