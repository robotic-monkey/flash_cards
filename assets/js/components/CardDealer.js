import React, {useContext} from 'react'
import {FlashCardContext} from '../contexts/FlashCardContext';
import Cards from './Cards'
import Button from 'react-bootstrap/Button';


export const CardDealer = () => {

  const context = useContext(FlashCardContext);

  const nextSlide = () => {
    if (context.selectedCards.length - 1 > (context.currentIndex.index)) {
      context.setIndex(context.currentIndex.index + 1)
    } else {
      context.setIndex(0)
    }
    context.setSide("front");
  }

  const backSlide = () => {
    if (0 !== (context.currentIndex.index)) {
      context.setIndex(context.currentIndex.index - 1)
    } else {
      context.setIndex(context.selectedCards.length - 1)
    }
    context.setSide("front");
  }

  return (
    <div>
      <p>{context.currentSide.side}</p>
      <div>
        <Button onClick={() => {
          backSlide();
        }}>BACK</Button>

        <Button onClick={() => {
          nextSlide();
        }}>NEXT</Button>

        <Button onClick={() => {
          context.flipCards();
        }}>FLIP</Button>

      </div>
      <Cards/>
    </div>
  )
}

export default CardDealer;