import React, {useContext} from 'react'
import {FlashCardContext} from '../contexts/FlashCardContext';
import Cards from './Cards'
import Button from 'react-bootstrap/Button';


export const CardDealer = () => {

  const context = useContext(FlashCardContext);

  return (
    <div>
      <p>{context.currentSide.side}</p>
      <div>
        <Button onClick={() => {
          context.nextCard();
        }}>NEXT</Button>
      </div>
      <Cards/>
    </div>
  )
}

export default CardDealer;