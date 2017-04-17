import React, { Component } from 'react';

import Card from './Card';

export default class CardPool extends Component {
  constructor(props) {
    super(props);
    console.log('CardPool props: ' + JSON.stringify(props));
    console.log(props);
  }

  render() {
    return (
      <div className="cardPool">
        {this.props.cards.map(function(card) {
          return (
            <Card key={card.multiverseid} card={card} />
          );
        })}
      </div>
    );
  }
}
