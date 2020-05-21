import React, {Component, createContext} from 'react';
import axios from 'axios';

export const FlashCardContext = createContext();

class FlashCardProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flashCards: [{side_a: "", side_b: "", side_c: "", side_d: "", category: "", section: "", primitives: {"radicals": {}} }],
      preselectedCards: [{side_a: "", side_b: "", side_c: "", side_d: "", category: "", section: "", primitives: {"radicals": {}} }],
      selectedCards: [{side_a: "", side_b: "", side_c: "", side_d: "", category: "", section: "", primitives: {"radicals": {}} }],
      currentIndex: {index: 0},
      currentSide: {side: 'front'},
      viewSideA: {front:true, back: true},
      viewSideB: {front:false, back: true},
      viewSideC: {front:false, back: true},
      viewSideD: {front:true, back: true},
      sound: {on: true},
      filters: {category: ['N5','N4']},
      sliderValue: [10,20],
      timerState: {on: false, length: 5}
    };
    this.readFlashCard()
  }

  setView(view, side, onoroff){
   
    //console.log("currentside: " + this.state.currentSide.side + ", view: " + view + ', side: ' + side + ', onoroff: ' + onoroff)
    if(side == 'front') {
      switch (view) {
        case "A":
          this.setState({viewSideA: {...this.state.viewSideA, front: onoroff}})
          break;
        case "B":
          this.setState({viewSideB: {...this.state.viewSideB, front: onoroff}})
            break;
        case "C":
          this.setState({viewSideC: {...this.state.viewSideC, front: onoroff}})
          break;
        case "D":
          this.setState({viewSideD: {...this.state.viewSideD, front: onoroff}})
          break;
        default:
          break;
      }
    }

    if(side == 'back') {
      
      switch (view) {
        case "A":
          this.setState({viewSideA: {...this.state.viewSideA, back: onoroff}})
          break;
        case "B":
          this.setState({viewSideB: {...this.state.viewSideB, back: onoroff}})
            break;
        case "C":
          this.setState({viewSideC: {...this.state.viewSideC, back: onoroff}})
          break;
        case "D":
          this.setState({viewSideD: {...this.state.viewSideD, back: onoroff}})
          break;
        default:
          break;
      }
    }
    
  }

  setSide(side){
    this.setState({currentSide: {side:side}});
  }

  flipCards(){
    this.setSide("back");
  }

  readFlashCard(){
    axios.get('/api/flashcard/read')
    .then(response => {
        this.setState({
            flashCards: response.data,
        });
        this.filterCards()
    }).catch(error => {
    console.error(error);
});
  }

  filterCard (card){
  let  returnValue = false;
     for (let index = 0; index < this.state.filters.category.length; index++) {
       const each = this.state.filters.category[index];
       if(card.category == each){
        returnValue = true;
        break;
      }else{
        returnValue = false
      }
    }
      return returnValue
  }

  filterCards(){
  const result = this.state.flashCards.filter(card => (this.filterCard(card)));
  this.setState({
    sliderValue: [1, result.length]
  })
  this.setState({
   selectedCards: result,
   preselectedCards: result,
 })
  }

  randomizeCards(){
    const randomized = this.state.selectedCards.sort(() => Math.random() - 0.5)
    this.setState({
      selectedCards: randomized
    })
  }

  resetCardOrder(){
    this.filterCards()
    //this.setState({
    //  selectedCards: this.state.preselectedCards
   // })
  }

  setCardRange(start, end){
    this.setState({
     selectedCards: this.state.preselectedCards.slice(start,end)
    })
  }

  setFilter(cat){
    if(this.state.filters.category.find(element => element==cat)){
      const result = this.state.filters.category.filter(word => word !== cat);
    this.state.filters.category = result
    }
    else{
      const joined = this.state.filters.category.concat(cat)
      this.state.filters.category = joined
    }
    this.filterCards()
  }

  setSliderValue(start, end){
    this.setState({
      sliderValue: [start, end]
    })
  }

  render() {
    return (
      <FlashCardContext.Provider value={{
          ...this.state,
          setIndex: (index) => this.setState({currentIndex: {index: index}}),
          readFlashCard: this.readFlashCard.bind(this),
          flipCards: this.flipCards.bind(this),
          randomizeCards: this.randomizeCards.bind(this),
          resetCardOrder: this.resetCardOrder.bind(this),
          setSide: this.setSide.bind(this),
          setView: this.setView.bind(this),
          setFilter: this.setFilter.bind(this),
          setCardRange: this.setCardRange.bind(this),
          setSliderValue: this.setSliderValue.bind(this),
          setSound: () => this.setState({sound: {on: !this.state.sound.on}})
      }}>
        {this.props.children}
      </FlashCardContext.Provider>
    );
  }
}

export default FlashCardProvider;
