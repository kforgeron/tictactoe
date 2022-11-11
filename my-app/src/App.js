import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Board from './components/Board';
import { Wrapper, GameWrapper } from './wrappers';

function App() {
  return (
    <Wrapper>
      <GameWrapper>
        <Board />
      </GameWrapper>
    </Wrapper>
  );
}

export default App;
