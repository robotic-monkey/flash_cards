import React from 'react';
import ReactDOM from 'react-dom';
import {AppTable} from './components/AppTable';
import FlashCardProvider from './contexts/FlashCardContext';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

  render() {
    return (
      <FlashCardProvider>
        <AppTable/>
      </FlashCardProvider>
    );
  }
}

ReactDOM.render(
  <App/>, document.getElementById('root'));
