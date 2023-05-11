/* eslint-disable no-useless-constructor */
import './styles/App.css';
import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideButtons: false,
    }
  }

  onClickToggleHide = (e) => {
    this.setState(prevState => ({
      hideButtons: !prevState.hideButtons,
    }));
  }

  render() {
    const { hideButtons } = this.state;
    const toggleButtonText = hideButtons ? 'Show Buttons' : 'Hide Buttons';
    return (
      <>
        <button className='hideBtn' onClick={this.onClickToggleHide}>{toggleButtonText}</button>
        <div className='container'>
          <Sidebar hideButtons={hideButtons}/>
          <Header  hideButtons={hideButtons}/>
          <Experience  hideButtons={hideButtons}/>
          <Education  hideButtons={hideButtons}/>
        </div>
      </>
    );
  }
}

export default App;
