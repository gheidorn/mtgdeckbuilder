console.log('Hello World!');
import React from 'react';
import ReactDOM from 'react-dom';
// import Counter from './Counter';
import CardPool from './CardPool';
import MainBoard from './MainBoard';
import SideBoard from './SideBoard';

document.addEventListener('DOMContentLoaded', function() {
  // ReactDOM.render(
  //   React.createElement(Counter),
  //   document.getElementById('mount')
  // );

  console.log(document.getElementById('cardPool'));
  console.log(document.getElementById('mainBoard'));
  console.log(document.getElementById('sideBoard'));

  ReactDOM.render(
    React.createElement(CardPool),
    document.getElementById('cardPool')
  );

  ReactDOM.render(
    React.createElement(MainBoard),
    document.getElementById('mainBoard')
  );

  ReactDOM.render(
    React.createElement(SideBoard),
    document.getElementById('sideBoard')
  );
});
