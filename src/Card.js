import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

const Types = {
  CARD: 'card'
};

const cardSource = {
  canDrag(props) {
    // You can disallow drag based on props
    // return props.isReady;
    return true;
  },

  isDragging(props, monitor) {
    // If your component gets unmounted while dragged
    // (like a card in Kanban board dragged between lists)
    // you can implement something like this to keep its
    // appearance dragged:
    return monitor.getItem().id === props.id;
  },

  beginDrag(props, monitor, component) {
    return component.state.card;
  },

  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      // You can check whether the drop was successful
      // or if the drag ended but nobody handled the drop
      return;
    }

    // When dropped on a compatible target, do something.
    // Read the original dragged item from getItem():
    const item = monitor.getItem();

    // You may also read the drop result from the drop target
    // that handled the drop, if it returned an object from
    // its drop() method.
    const dropResult = monitor.getDropResult();

    // This is a good place to call some Flux action
    //console.log('card state => ' + item.name);
  }
};

function collect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDragSource: connect.dragSource(),
    // You can ask the monitor about the current drag state:
    isDragging: monitor.isDragging()
  };
}

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: props.card
    }
  }

  render() {

    const { id } = this.state.card;

    const { isDragging, connectDragSource } = this.props;

    return connectDragSource(
      <div className="proxyCard">
        <h5>{this.props.card.name}</h5>
        <p>{this.props.card.text}</p>
      </div>
    );
  }
}

export default DragSource(Types.CARD, cardSource, collect)(Card);

// <img src={'http://gatherer.wizards.com/Handlers/Image.ashx?type=card&multiverseid=' + this.props.card.multiverseid} />
