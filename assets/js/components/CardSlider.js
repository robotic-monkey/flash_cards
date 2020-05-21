import React, {useContext} from 'react';
import {FlashCardContext} from '../contexts/FlashCardContext';
import Slider, {Range} from 'rc-slider';
import 'rc-slider/assets/index.css';
import styled from 'styled-components';

const StyledRange = styled(Range)`
   width: 80%;
   margin-left: 40px;
   margin-bottom: 40px;
   margin-top: 30px;
  `;

export const CardSlider = () => {

  const context = useContext(FlashCardContext);
  

 const onSliderChange = (value) =>{
    context.setCardRange(value[0]-1, value[1])
    context.setSliderValue(value[0], value[1])
  } 

    return (
      <div>
        <StyledRange
          defaultValue={[1, context.selectedCards.length]}
          min={1}
          max={context.preselectedCards.length/*this.state.max*/}
          onChange={onSliderChange}
          value={context.sliderValue}
          />
          <p>Selected: {context.selectedCards.length + "/" + context.preselectedCards.length}</p>
      </div>
    );
  
}

export default CardSlider;
