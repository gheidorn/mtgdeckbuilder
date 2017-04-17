import React from 'react';
import ReactDOM from 'react-dom';
import DeckBuilder from './DeckBuilder';

// reactjs entry point
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(DeckBuilder),
    document.getElementById('deckBuilderContainer')
  );
});
